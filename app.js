const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json);

// Import ROutes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

app.listen(3000);
