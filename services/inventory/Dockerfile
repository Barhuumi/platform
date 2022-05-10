# FROM node:16.4
# M1 arm architecture
FROM amd64/node

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

CMD node index.js

EXPOSE 3001