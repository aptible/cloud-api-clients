# Cloud API Clients

A repository that will contain various http/other clients to connect
with the [cloud-api](https://github.com/aptible/cloud-api) service.

## Golang usage

This has been tested with `go >=1.18`.

Install it with `go get github.com/aptible/cloud-api-clients/clients/go`.

See the documentation [here for go usage](https://github.com/aptible/cloud-api-clients/tree/main/clients/go#configuration-of-server-url).

## Python Usage

To use this library in a python application, you can reference it with:

```shell
pip install git+https://github.com/aptible/cloud-api-clients.git#subdirectory=clients/python
```

Or adding an entry like this to your `setup.cfg`:

```sh
executioner-client @ git+ssh://git@github.com/aptible/cloud-api-clients.git#subdirectory=clients/python
```

See the documentation [here for python usage](https://github.com/aptible/cloud-api-clients/tree/main/clients/python#installation--usage).