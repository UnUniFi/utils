# Upgrade Test on docker

```bash
# Change docker-compose.yml to current version chain before run
docker-compose build
docker-compose up -d
docker-compose exec ununifid bash

# bash in docker
./setup_node_then_start_for_docker_after_v3.0.sh
```
