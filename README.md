# healtheme

Packages
client - react.js frontend
server - node.js backend
common - code shared between client and server

Installation
Clone the repository
CD into the repository and run yarn or npm install
Create a postgres database and a table called users, as defined in ./backend/database.sql
Create a file named .env in ./backend and make sure it has the following variables defined:
DATABASE_NAME=
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
COOKIE_SECRET= 'any value'
Run yarn dev:server and yarn dev:client
