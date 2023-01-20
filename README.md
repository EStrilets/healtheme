# healtheme

Packages
client - react.js frontend
server - node.js backend
common - code shared between client and server

<h2> Installation </h2>
<p>Clone the repository </p>
<br/>
CD into the repository and run yarn or npm install
<br/>
Create a postgres database and a table called users, as defined in ./backend/database.sql
<br/>
Create a file named .env in ./backend and make sure it has the following variables defined:
<br/>
<ul> 
  <li>DATABASE_NAME= </li>
  <li> DATABASE_HOST= </li>
  <li>DATABASE_USER= </li>
  <li>DATABASE_PASSWORD= </li>
  <li>DATABASE_PORT= </li>
  <li>COOKIE_SECRET= 'any value' </li>
</ul>
<br/>
Run yarn dev:server and yarn dev:client
