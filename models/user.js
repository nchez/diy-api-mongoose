const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  //   graphs: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Graph",
  //     },
  //   ],
  //   comments: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Comment",
  //     },
  //   ],
});

module.exports = mongoose.model("User", userSchema);
