## A template project to use docker

Feature:
- nodejs server
- nginx
- redis
- rabbitmq
- mongodb

---

## Docker version using
docker -v  
Docker version 20.10.21  

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
```cmd
docker build -t nodejs_i .

docker run -it --rm -p 3000:3000 --name nodejs_c nodejs_i

docker run -d -p 3000:3000 --name nodejs_c nodejs_i
```

docker-compose
```cmd
docker-compose ps
docker-compose up -d
docker-compose down
```

---

## Redis
```cmd
docker run -p 6379:6379 -d --name redis_c redis

docker exec -it redis_c bash
redis-cli
docker exec -it redis_c redis-cli
```

redis.conf  
bind 0.0.0.0 -::1  
protected-mode no  

---

## nginx
host.docker.internal

---

## RabbitMq
```cmd
docker pull rabbitmq:3.11.4-management
docker run -it --rm -p 15672:15672 -p 5672:5672 --name rabbitmq_c rabbitmq:3.11.4-management
docker run -d -p 15672:15672 -p 5672:5672 --name rabbitmq_c rabbitmq:3.11.4-management
```

### add testing user tim 123456
```cmd
docker run -d -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=tim -e RABBITMQ_DEFAULT_PASS=123456 --name rabbitmq_c rabbitmq:3.11.4-management
```

---

## mongo db
```cmd
docker pull mongo
docker run -d -p 27017:27017 --restart on-failure:3 --name mongodb_c6 2dd27bb6d3e6

docker run -d -p 27017:27017 --name mongodb_c mongo

docker run -it --rm -p 27017:27017
docker run -d -p 27017:27017 --restart always -v $PWD/data:/data/db --name mongodb_c mongo
```

### test mongo
```cmd
mongosh
mongosh --port 27017

show dbs
use pms
db.user.insertOne({ name: 'tim' })
db.user.find()
```

docker old using mongo version
MongoDB shell version v4.4.6
MongoDB server version: 4.4.6

mongo version
Using MongoDB:          6.0.3
Using Mongosh:          1.6.0

---

## network
docker network ls  
docker exec -it -u root fad sh  
ping nodejs  

---

## log
docker logs mongodb_c
docker stats mongodb_c
docker cp mongodb_c:src_path dest_path

---

```cmd
%UserProfile%
.wslconfig
[wsl2]
memory=2GB
swap=2GB
processors=2
localhostForwarding=true
```

--

## nodemon
nodemon -L server.js