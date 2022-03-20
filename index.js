const express = require("express");
const app = express();
const cors = require("cors");

// body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/graphing");

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "what up" });
});

// constollers
app.use("/graphs", require("./controllers/graphs"));

app.use("/comments", require("./controllers/comments"));

app.put;

app.listen(PORT, () => {
  console.log("Mongoose Graphing running");
});
