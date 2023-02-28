# Equi "Wallet" Coding Assignment

## Getting Started

To make things easier to get started quickly, we've set everything up in docker. That said, you will need to have docker available on your system. Then to start the database (postgres), Express api, and React web app just run:

`docker compose up`

---

## Overview

### Database
This environment uses a Postgres database. We interact with the database via Prisma ORM. Prisma handles our schema, migrations, data interactions, and types.

Running migrations is covered in further detail within `packages/api/README`

### API
The API is rest via Express. There is a stock example for the `user` model available for use and reference with route, controller, service, dto, etc.

### Webapp
This is a basic React app (via create-react-app for simplicity). As the exercise instructions point out, we are not scoring on elegant the front end is, so things are pretty bare bones here. We do however include an example for making various requests to the API utilizing axios + react-query.

---

## Adding a dependency:

If you choose to add any dependencies, you will need to do the following to ensure they are available in your containerized apps.

```
npm i <DEPENDENCY>
docker compose down
docker compose up --build
```