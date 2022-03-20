const express = require("express");
const router = express.Router();
const db = require("../models");
// const cors = require("cors");

module.exports = router;

router.get("/", async (req, res) => {
  const foundComments = await db.Comment.find({});
  res.json(foundComments);
});

router.get("/:id", async (req, res) => {
  const foundComment = await db.Comment.find({ _id: req.params.id });
  res.json(foundComment);
});

router.put("/:id", async (req, res) => {
  const CommentToUpdate = await db.Comment.updateOne(
    { _id: req.params.id },
    req.body
  );
  const updatedGraph = await db.Comment.find({ _id: req.params.id });
  res.json(updatedGraph);
});

router.delete("/:id", (req, res) => {
  db.Comment.findByIdAndDelete(req.params.id).then(() =>
    res.status(204).json({ msg: "it has been deleted" })
  );
  if (db.Comment.find({ _id: req.params.id })) {
  }
});
