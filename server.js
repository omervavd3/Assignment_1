//env
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;

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
const db = uri;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
//routes
const postsRouter = require("./routes/posts_routes");
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port||3000}`);
});
