FROM node:15-alpine3.10 AS base

RUN apk add --no-cache bash \
    python3 \
    py3-pip \
    build-base \
    linux-headers \
    postgresql-dev 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:15-alpine3.10

WORKDIR /app
COPY --from=base /app ./


