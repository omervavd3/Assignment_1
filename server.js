//env
const dotenv = require("dotenv").config();
const port = process.env.PORT;

//express
const express = require("express");
const app = express();

//for mongoDB
const mongoose = require("mongoose");

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongo connection

//routes
const postsRouter = require("./routes/posts_routes");
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
