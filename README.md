# healtheme

Packages
client - react.js frontend
server - node.js backend
common - code shared between client and server

<h2> Installation </h2>
<p> Make sure that you have a PostgreSQL and Redis pre-installed </p>
<p>1. Clone the repository </p>
<br/>
<p> 2. CD into the repository and run yarn or npm install </p>
<br/>
<p> 3. Create a postgres database and a table called users, as defined in ./backend/database.sql </p>
<br/>
<p> 4. Create a file named .env in ./backend and make sure it has the following variables defined: </p>
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
5. Run yarn dev:server and yarn dev:client
