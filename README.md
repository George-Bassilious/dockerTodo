
## How to use Docker

For the first time rebuild all images

```bash
$ docker-compose up --build
```

After initial build, the --build flag can be removed for faster startup

```bash
$ docker-compose up
```

List all active docker containers

```
docker ps
```

Execute an arbitrary command on a specific container

```
docker exec -it <name of container> <command to exec>

Example: Shell access to container
docker exec -it <name of container> sh

Example: Run npm tests
docker exec -it <name of container> npm run test
```
