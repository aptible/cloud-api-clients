import typing
from typing import List, Optional

from glom import glom

# below is done to enable testing outside the scope of the project with ease
import sys

sys.path.insert(1, '../../../clients/python')
from aptible_client.helpers import getters, logger_utils, waiters  # NOQA

if typing.TYPE_CHECKING:
    from clients.python.aptible_client.helpers import getters, logger_utils, waiters

logger = logger_utils.setup_logger("full")

VPC_NAME: str = "testing-aptible-client"

CONTAINER_IMAGE: str = "quay.io/aptible/deploy-demo-app"
CONTAINER_PORT: int = 5000
CONTAINER_WEB_COMMAND: List[str] = ["gunicorn", "app:app", "-b", "0.0.0.0:5000", "--access-logfile", "-"]
CONTAINER_WORKER_COMMAND: List[str] = ["python", "-m", "worker"]


def main(
        environment_id: str,
        organization_id: str,
        web_fqdn_subdomain: str,
        web_fqdn_domain: str,
        vpc_name: Optional[str] = VPC_NAME,
        container_image: Optional[str] = CONTAINER_IMAGE,
        container_http_port: Optional[int] = CONTAINER_PORT,
        container_web_command: Optional[List[str]] = CONTAINER_WEB_COMMAND,  # NOQA - mutable but ignore for typer hint
        container_worker_command: Optional[List[str]] = CONTAINER_WORKER_COMMAND, # NOQA - mutable but ignore for typer hint
        validation_method: Optional[str] = "DNS",
        force_new: Optional[bool] = True,
        cleanup: Optional[bool] = False
):
    logger.info("Starting the full flow")
    configuration = getters.get_client_configuration()
    # Initialize the API and create a session
    waiter = waiters.Waiter(
        configuration=configuration,
        environment_id=environment_id,
        logger=logger,
        organization_id=organization_id,
        force_new=force_new
    )

    if cleanup:
        cleanup_flow(
            waiter,
            web_fqdn_subdomain,
            web_fqdn_domain,
            vpc_name,
            validation_method,
        )
        return

    # Launch VPC
    vpc_asset_data = waiter.get_or_launch_asset_and_wait(
        asset="aws__vpc__latest",
        asset_parameters={
            "name": vpc_name
        }
    )

    # Launch RDS database
    rds_asset_data = waiter.get_or_launch_asset_and_wait(
        asset="aws__rds__latest",
        asset_parameters={
            "name": "app-database",
            "engine": "postgres",
            "engine_version": "13",
            "vpc_name": vpc_name
        },
    )

    # Launch ElastiCache Redis cache
    elasticache_asset_data = waiter.get_or_launch_asset_and_wait(
        asset="aws__elasticache_redis__latest",
        asset_parameters={
            "name": "app-redis",
            "snapshot_window": "00:00-01:00",
            "maintenance_window": "sun:10:00-sun:14:00",
            "vpc_name": vpc_name
        },
    )

    # Create ACM Certificate
    # TODO - add logger statements if someone opted to use DNS or EMAIL and explain consequences of each in a warn
    acm_asset_data = waiter.get_or_launch_asset_and_wait(
        asset="aws__acm_certificate__latest",
        asset_parameters={
            "fqdn": f"{web_fqdn_subdomain}.{web_fqdn_domain}",
            "validation_method": validation_method
        },
    )

    acm_certificate_arn = glom(acm_asset_data, 'outputs.acm_certificate_arn.data')
    acm_validation_records = glom(acm_asset_data, 'outputs.dns_validation_records.data')
    validation_fqdns = []
    # TODO - explain what this is probably
    for acm_validation_record in acm_validation_records:
        acm_rr_name = acm_validation_record['resource_record_name']
        acm_rr_value = acm_validation_record['resource_record_value']
        validation_fqdns.append(acm_rr_value)
        print("========================================================================================")
        print("")
        print(f"ACM certificate created. To continue, create CNAME record for {acm_rr_name} with value {acm_rr_value}")
    input("Press Enter once this CNAME has been created...")
    # explain timers

    # TODO - use new asset bundle to test acm validation
    # 1 - create records on any dns provider for their services:
    #        - in our example we will probably use route 53, but we should include other examples (cloudflare!)
    #        - acr_rr_value is the above value we will need to reference
    # 2 - call the acm validator bundle/waiter bundle
    waiter.get_or_launch_asset_and_wait(
        asset="aws__acm_certificate_waiter__latest",
        asset_parameters={
            "certificate_arn": acm_certificate_arn,
            "validation_fqdns": validation_fqdns
        },
    )

    environment_secrets = [
        {
            "environment_variable": "DATABASE_URL",
            "secret_arn": glom(rds_asset_data, 'outputs.uri_secret_arn.data'),
            "secret_kms_arn": glom(rds_asset_data, 'outputs.rds_secrets_kms_key_arn.data'),
            "secret_json_key": ""
        },
        {
            "environment_variable": "TOKEN_SECRET",
            "secret_arn": glom(elasticache_asset_data, 'outputs.elasticache_token_secret_arn.data'),
            "secret_kms_arn": glom(elasticache_asset_data, 'outputs.elasticache_token_kms_key_arn.data'),
            "secret_json_key": "token"
        },
        {
            "environment_variable": "REDIS_URL",
            "secret_arn": glom(elasticache_asset_data, 'outputs.elasticache_token_secret_arn.data'),
            "secret_kms_arn": glom(elasticache_asset_data, 'outputs.elasticache_token_kms_key_arn.data'),
            "secret_json_key": "dsn"
        }
    ]

    # Launch ECS Web Service
    ecs_web_asset_data = waiter.always_launch_asset_and_wait(
        asset="aws__ecs_web_service__latest",
        asset_parameters={
            "name": "aptible-demo",

            # Specify network to use.
            "vpc_name": vpc_name,
            "is_public": True,

            "container_name": "aptible-demo",
            "container_image": container_image,
            "container_port": container_http_port,
            "container_command": container_web_command,

            "connects_to": [rds_asset_data.id, elasticache_asset_data.id],

            # Connect our SSL Certificate
            "lb_cert_arn": glom(acm_asset_data, 'outputs.acm_certificate_arn.data'),
            "lb_cert_domain": web_fqdn_domain,
            "lb_cert_subdomain": web_fqdn_subdomain,

            # Tell ECS what to name the environment variables for our database secret
            "environment_secrets": environment_secrets
        },
    )

    # Launch ECS Worker Service
    waiter.always_launch_asset_and_wait(
        asset="aws__ecs_compute_service__latest",
        asset_parameters={
            "name": "aptible-demo-worker",

            # Specify network to use.
            "vpc_name": vpc_name,
            "is_public": True,

            "container_name": "aptible-demo",
            "container_image": container_image,
            "container_command": container_worker_command,
            "connects_to": [rds_asset_data.id, elasticache_asset_data.id],

            # Tell ECS what to name the environment variables for our database secret
            "environment_secrets": environment_secrets
        },
    )

    ecs_lb_url = glom(ecs_web_asset_data, 'outputs.load_balancer_url.data')[0]
    ecs_service_dns = ecs_lb_url['service_dns']
    ecs_lb_dns = ecs_lb_url['lb_dns']

    print("")
    print("========================================================================================")
    print("Provisioning complete! To finalize setup:")
    print(f"  * Create CNAME record for {ecs_service_dns} with value {ecs_lb_dns}")
    # Relax :-D


def cleanup_flow(
        waiter: waiters.Waiter,
        web_fqdn_subdomain: str,
        web_fqdn_domain: str,
        vpc_name: Optional[str] = VPC_NAME,
        validation_method: str = "DNS",
):
    waiter.find_destroy_asset_and_wait(
        asset="aws__acm_certificate__latest",
        asset_parameters={
            "fqdn": f"{web_fqdn_subdomain}.{web_fqdn_domain}",
            "validation_method": validation_method
        },
    )
    waiter.find_destroy_asset_and_wait(
        asset="aws__elasticache_redis__latest",
        asset_parameters={
            "name": "app-redis",
            "snapshot_window": "00:00-01:00",
            "maintenance_window": "sun:10:00-sun:14:00",
            "vpc_name": vpc_name
        },
    )
    waiter.find_destroy_asset_and_wait(
        asset="aws__rds__latest",
        asset_parameters={
            "name": "app-database",
            "engine": "postgres",
            "engine_version": "13",
            "vpc_name": vpc_name
        },
    )
    waiter.find_destroy_asset_and_wait(
        asset="aws__vpc__latest",
        asset_parameters={
            "name": vpc_name
        }
    )
