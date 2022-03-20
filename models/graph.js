const mongoose = require("mongoose");

// create schema

const graphSchema = new mongoose.Schema(
  {
    name: String,
    graphurl: String,
    // grapher: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   unique: true,
    // },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

// name the model (make it singular)
module.exports = mongoose.model("Graph", graphSchema);

// make it available to our other files for import
