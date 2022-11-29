## A template project to use docker

Feature:
- nodejs server
- nginx
- redis
- rabbitmq
- mongodb

---


### Docker commands
```cmd
docker -v
docker --help
docker images
docker ps
docker ps -a
```

```cmd
docker start nodejs_c
docker stop nodejs_c

docker image rm nodejs_i -f
docker container rm nodejs_c 
```

Delete all
```cmd
docker system prune -a
docker image prune -a
docker container prune
```

You can then build and run the Docker image:
docker build -t nodejs_i .

docker run -it --rm -p 3000:3000 --name nodejs_c nodejs_i

docker run -d -p 3000:3000 --name nodejs_c nodejs_i


docker-compose
```cmd
docker-compose ps
docker-compose up -d
docker-compose down
```

---

## Redis
docker run -p 6379:6379 -d --name redis_c redis

docker exec -it redis_c bash
redis-cli
docker exec -it redis_c redis-cli

redis.conf
bind 0.0.0.0 -::1
protected-mode no

---

## nginx
host.docker.internal

---

## RabbitMq
docker pull rabbitmq:3.11.4-management
docker run -it --rm -p 15672:15672 -p 5672:5672 --name rabbitmq_c rabbitmq:3.11.4-management
docker run -d -p 15672:15672 -p 5672:5672 --name rabbitmq_c rabbitmq:3.11.4-management

### add testing user tim 123456
docker run -d -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=tim -e RABBITMQ_DEFAULT_PASS=123456 --name rabbitmq_c rabbitmq:3.11.4-management

---

## nodemon
nodemon -L server.js