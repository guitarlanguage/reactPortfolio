const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const messages = require("./routes/api/messages");
// const posts = require("./routes/api/posts");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/messages", messages);
// app.use("/api/profile", profile);
// app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));