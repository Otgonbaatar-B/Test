import express from "express";

const port = 8888;
const server = express();

server.get("/", (request, response) => {
  response.send("GET huselt irlee");
});

server.post("/", (request, response) => {
  response.send(`POST huselt irlee`);
});

server.put("/", (request, response) => {
  response.send(`PUT huselt irlee`);
});

server.delete("/", (request, response) => {
  response.send(`DELETE huselt irlee`);
});

server.listen(port, () => {
  console.log(`Server ajillaj ehellee http://localhost:${port}`);
});
