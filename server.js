import express from "express";
import bodyParser from "body-parser";

const port = 8888;
const server = express();
server.use(bodyParser.json());

server.get("/", (request, response) => {
  response.send("GET huselt irlee");
});

server.post("/", (request, response) => {
  response.send(`hello tanii body text ${request.body.name}`);
});

server.listen(port, () => {
  console.log(`Server ajillaj ehellee http://localhost:${port}`);
});
