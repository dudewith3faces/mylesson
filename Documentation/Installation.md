# Installation

## <a name="software"></a>Software

The following software is required to start this app:

##### Necessary:

- [Node.Js](https://nodejs.org/en/download)
- [Docker](https://www.docker.com/products/docker-desktop)

##### Optional

- [Postgres](https://www.postgresql.org/download)

## <a name="startup"></a>Start

_NB:_ Ensure the necessary software above is installed before starting this application. The rest of the dependencies can be run in a docker container.

_NB:_ Do not change the server PORT as it is hardcoded into the React frontend

- Create an `.env` in `backend` folder.
- Copy the value of `.env.example` into `.env` and set appropriate value. Check `compose.yml` for the postgress authentication detail
- Run `docker-compose up -d` to start the app.
- Login into the Postgres server. Create a database with SQL script in `SQL/createDB.sql` then create a table with the script in `SQL/movies.sql`.
- Visit http://localhost to browse the application
