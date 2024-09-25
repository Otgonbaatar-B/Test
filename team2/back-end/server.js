import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const port = 8888;
const server = express();
const saltRounds = 10;
const users = [];

server.use(bodyParser.json());

server.get("/", (request, response) => {
  response.send(`GET huselt irlee ${users}`);
});

server.post("/register", async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).send("Email and password are required.");
  }

  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return response.status(409).send("User already exists.");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    users.push({ email, password: hashedPassword });
    response.status(201).send("User registered successfully.");
  } catch (error) {
    response.status(500).send("Error registering user.");
  }
});

server.put("/", (request, response) => {
  response.send("PUT huselt irlee");
});

server.delete("/", (request, response) => {
  response.send("DELETE huselt irlee");
});

server.listen(port, () => {
  console.log(`Server ajillaj ehellee http://localhost:${port}`);
  console.log(users);
});
