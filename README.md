# Quick test

## Introduction

Thanks for using this test. We have created a simple api that deploys in a docker container. 
We've devised some small tasks that will help us gauge your fit. 

Please follow the installation instructions carefully and don't spend any more time than allocated in the tasks below, if you run out of time or it is too exhausting please post what you have and we will review it regardless.

## Installation (15 minutes)

### Prerequisites

- docker installed | https://docs.docker.com/get-docker/
- git installed | https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- WSL2 for windows | https://learn.microsoft.com/en-us/windows/wsl/install
- A database GUI
- NPM | https://docs.npmjs.com/cli/v6/commands/npm-install
- Postman | https://www.postman.com/

### Steps

1. Git clone the repository `git clone https://github.com/Eurocamp/engineering-test.git`
2. `cd` into the engineering-test directory
3. run `docker-compose up -d --force-recreate`  (some versions of docker will use `docker compose` rather than `docker-compose`)
4. run `docker exec -it engineering-test_eurocamp-api_1 npm run seed:run` (sometimes the name is different, check with `docker ps`)
5. Check that there is data in the database tables (see below for connection details). Also review the api documentation at http://localhost:3001/api
6. Load the postman collection from the root directory 'Engineering.postman_collection.json' and test the api endpoints

#### Connection details
Credentials for your database GUI 

HOST=localhost
PORT=5433
USER=postgres
PASSWORD=postgres
NAME=eurocamp_api



 
