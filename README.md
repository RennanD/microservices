# Microservices with Kafka and Node.js

Using [Apach Kafka](https://kafka.apache.org/) to comunicate two services.

## Cloning thi project

```bash
git clone https://github.com/RennanD/microservices

# or

gh repo clone RennanD/microservices
```

## Requisites

- [NodeJs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/get-started)
- [docker-compose](https://docs.docker.com/compose/)

## The Backoffice app

This is main application, to managment companies and modules

### Runing Backoffice app 

in microservices root path run:

```bash
cd backoffice
yarn install
docker-compose up -d
yarn dev:server
```

### Insomnia
[Download Insomnia](https://insomnia.rest/download). 

Import `backoffice-insomnia.json`, to get insomnia routes.

## The Company app

This is secondary application, to list a company modules

### Runing Company app 

in microservices root path run:

```bash
cd company-app
yarn install
docker-compose up -d
yarn 
```