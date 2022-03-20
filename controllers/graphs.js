const express = require("express");
const router = express.Router();
const db = require("../models");
// const cors = require("cors");

module.exports = router;

router.get("/", async (req, res) => {
  const foundGraphs = await db.Graph.find({});
  res.json(foundGraphs);
});

router.get("/:id", async (req, res) => {
  const foundGraphs = await db.Graph.find({ _id: req.params.id });
  res.json(foundGraphs);
});

router.post("/", (req, res) => {
  db.Graph.create(req.body, (err, createdGraph) => {
    if (err) console.error(err);
    else res.json(createdGraph);
  });
});

router.put("/:id", async (req, res) => {
  const graphToUpdate = await db.Graph.updateOne(
    { _id: req.params.id },
    req.body
  );
  const updatedGraph = await db.Graph.find({ _id: req.params.id });
  res.json(updatedGraph);
});

router.post("/:id/comment", async (req, res) => {
  try {
    // find the blog at :id
    // create a comment
    const newComment = await db.Comment.create(req.body);
    const foundGraph = await db.Graph.findById(req.params.id);
    newComment.graph = req.params.id;
    foundGraph.comments.push(newComment._id);
    await foundGraph.save(), newComment.save();
    res.json(foundGraph);
  } catch (err) {
    console.log(err);
    res.status(503).json({ msg: "error" });
  }
});

router.delete("/:id", (req, res) => {
  db.Graph.findByIdAndDelete(req.params.id).then(() =>
    res.status(204).json({ msg: "it has been deleted" })
  );
});
