const mongoose = require("mongoose");

// create schema

const commentSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    graph: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Graph",
    },
  },
  {
    timestamps: true,
  }
);

// name the model (make it singular)
module.exports = mongoose.model("Comment", commentSchema);

// make it available to our other files for import
