const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const config = require('./config/config');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// APIs
app.get("/test-mongo", async (req, res) => {
    const Test = mongoose.model("Test", new mongoose.Schema({ name: String }));
    const test = await Test.create({ name: "MongoDB Test" });
    res.send(test);
  });
  
  app.get("/test-postgres", async (req, res) => {
    const users = await prisma.user.findMany();
    res.send(users);
  });
  

/** Connect to db */
mongoose.connect(config.mongoUri, {useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  prisma.$connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
