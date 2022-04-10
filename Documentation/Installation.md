# Installation

## <a name="software"></a>Software

The following software is required to start this app:

##### Necessary:

- [Node.Js](https://nodejs.org/en/download)
- [Docker](https://www.docker.com/products/docker-desktop)

##### Optional

- [Postgres](https://www.postgresql.org/download)

## <a name="startup"></a>Start

**NB:**

    1. Ensure the necessary software above is installed before starting this application. The rest of the dependencies can be run in a docker container.
    2. Do not change the server PORT as it is hardcoded into the React frontend
    3. Set database host to `postgres` if using docker to test

- Create an `.env` in `backend` folder.
- Copy the value of `.env.example` into `.env` and set appropriate value. Check `compose.yml` for the postgress authentication detail
- Change directory to backend folder then run `yarn && yarn start`
- Change directory to frontend folder then run `yarn && yarn start`
  **NB**: Do not use Docker to start the server again. You can use docker for other aspect of the app but not the frontend. It will require configuring nginx for cors

- Run `docker-compose up -d` to start the app.

- Login into the Postgres server. Create a database with SQL script in `SQL/createDB.sql` then create a table with the script in `SQL/movies.sql`.
- Visit http://localhost:3000 if the app is not started with Docker else http://localhost to browse the application if it is started with docker
