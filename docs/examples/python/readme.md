# Using Python helpers

Looking at one of the partials in this directory (ex: partials/vpc/main.py) can be very helpful.

To use the client with the utilities is fairly simple:

```python
import os
from aptible_client.helpers import misc, logger_utils, waiters

# create a waiter that will help you deploy assets
waiter = waiters.Waiter(
    configuration=misc.get_client_configuration(),
    environment_id=os.getenv("ENVIRONMENT_ID"),
    logger=logger_utils.setup_logger("testing"),
    organization_id=os.getenv("ORGANIZATION_ID"),
    force_new=False
)

# create a VPC with the waiter
vpc_name = "some-name"
waiter.get_or_launch_asset_and_wait(
    asset="aws__vpc__latest",
    asset_parameters={
        "name": vpc_name
    }
)

# create a RDS instance with the waiter 
waiter.get_or_launch_asset_and_wait(
    asset="aws__rds__latest",
    asset_parameters={
        "name": "app-database",
        "engine": "postgres",
        "engine_version": "13",
        "vpc_name": vpc_name
    },
)
```
