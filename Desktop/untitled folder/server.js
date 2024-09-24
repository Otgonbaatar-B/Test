import express, { response } from "express";
import bodyParser from "body-parser";
import { request } from "http";
const port = 1000;
const app = express();
app.use(bodyParser.json());
app.get("/", (request, response) => {
  response.send("hello tanii GET huselt irlee");
});
app.post("/", (request, response) => {
  console.log(request.body.name);
  response.send("hello tanii POST huselt irlee");
});
app.listen(port, () => {
  console.log(`Server ajillaj ehelle http://localhost:${port}`);
});
