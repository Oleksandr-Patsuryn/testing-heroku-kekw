const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);


setInterval(() => {
  let request = require("request");
  let url = "https://testing-heroku-kekw.herokuapp.com" // My heroku app
  request(url, (error, response, body) => {
    console.log(body);
  })}, 300000)
