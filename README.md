# End to end test suite for librephotos

## Install

```
yarn
```

or

```
npm install
```

## Prepare environment

To launch the librephotos stack for e2e testing run

```
cd docker
docker-compose up -d
```

This will create stack with all dependencies i.e. `redis`, `postgres`, `proxy` and local builds of `frontend` and `backend`.
Backend and frontend are assumed to be located in adjacent folders to the librephotos-e2e folder.
This can be changed by editting [docker/.env](docker/.env) file.

When stack is up and running it can be accessed by visiting http://localhost:8080

## Run tests

Run tests in headless mode

```
npm test
```

Run tests while developing with preview and hot reloading

```
npx cypress open
```

## Tear down environment

```
cd docker
docker-compomse down -v
```
