//Install express server
const express = require('express');
const path = require('path');

const app = express();

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // <== You can change the port

// Serve only the static files form the dist directory
app.use(express.static('./dist/testing-heroku'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/testing-heroku/'}),
);

server.use(middlewares);
server.use(router);
app.use(server.listen(port));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

