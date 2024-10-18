


## API Overview
The API is ready to be consumed with no errors once deployed. Example API endpoint:
http://localhost:3001/api/1/users

You can use this endpoint to fetch the data after setting up the environment as described below. Make sure to test the available endpoints through Postman or any API testing tool.

**Important**: Ensure that there are **two terminals** running:
- One for running the Docker services.
- One for running the API service and interacting with it.

## Installation (15 minutes)

### Prerequisites
- Docker installed | [Docker Installation Guide](https://docs.docker.com/get-docker/)
- Git installed | [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- WSL2 for Windows | [WSL2 Installation Guide](https://learn.microsoft.com/en-us/windows/wsl/install)
- A database GUI
- NPM | [NPM Installation Guide](https://docs.npmjs.com/cli/v6/commands/npm-install)
- Postman | [Postman Download](https://www.postman.com/)

### Steps
1. Git clone the repository:
    ```bash
    git clone https://github.com/Eurocamp/eurocamp-api-test.git
    ```
2. `cd` into the engineering-test directory:
    ```bash
    cd eurocamp-api-test
    ```
3. Run:
    ```bash
    docker-compose up -d --force-recreate
    ```
   (Some versions of Docker will use `docker compose` rather than `docker-compose`).

4. Run:
    ```bash
    docker exec -it eurocamp-api-test npm run seed:run
    ```
   (Sometimes the name is different, check with `docker ps`).

5. Load the Postman collection from the root directory `'Engineering.postman_collection.json'` and test the API endpoints.

#### Connection Details

Credentials for your database GUI:

- **HOST**: localhost
- **PORT**: 5433
- **USER**: postgres
- **PASSWORD**: postgres
- **NAME**: eurocamp_api
