const res = require("express/lib/response");
const mongoose = require("mongoose");

// connect to the db URI
mongoose.connect("mongodb://127.0.0.1/graphing");
// graph the db connection
const db = mongoose.connection;

// have some callback messages on connection or error
db.once("open", () => {
  console.log(`hey there buddy. mongoose connected @ ${db.host}:${db.port}`);
});

db.on("error", (error) => {
  console.log("oh no! something has happened hehehe probs a db thingy");
  console.log(error);
});

console.log("hello from the models folder!");

// module.exports all the db models/collections
module.exports.Graph = require("./graph");
module.exports.User = require("./user");
module.exports.Comment = require("./comment");
