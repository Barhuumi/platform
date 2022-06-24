# FROM node:16.4
# M1 arm architecture
FROM amd64/node
# FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

CMD node src/api.js

EXPOSE 3002