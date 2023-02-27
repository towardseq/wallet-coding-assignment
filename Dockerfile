FROM node:18 AS api

WORKDIR /usr/src/app/packages/api

COPY packages/api ./

RUN npm i
RUN npm run prisma:generate

FROM node:18 AS webapp

WORKDIR /usr/src/app/packages/webapp


FROM postgres:13.7-alpine as db
COPY ./packages/database/init/init-user-db.sh /docker-entrypoint-initdb.d/init-user-db.sh
