# K6 with docker and docker-compose

K6 supports running in docker image. I think that using docker-compose to store all commands it most suitable approach for running k6 load test from any machine

## Remarks

When using docker compose you should mount volume with the scripts into k6 container. To start you should use command option to run specific script.

**After making changes to js file and using docker-compose you should bring the container down first in order to be able to load changes into k6 container**.

Example of docker-compose file.

```yml
version: "3"

services:
  k6-load-test:
    container_name: k6-load-test
    image: grafana/k6:0.38.3
    volumes:
      - ./tests:/src
    command: run /src/max-load.js

```
