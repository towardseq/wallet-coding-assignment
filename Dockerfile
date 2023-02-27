FROM node:18 AS api

WORKDIR /usr/src/app/packages/api

COPY package*.json ./

FROM node:18 AS app

WORKDIR /usr/src/app/packages/webapp

COPY package*.json ./
