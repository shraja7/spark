const express = require("express");
const router = express.Router();
//array of ideas
const ideas = [
  {
    id: 1,
    text: "idea 1",
    tag: "Technology",
    username: "TonyStart",
    date: "2020-01-01",
  },
  {
    id: 2,
    text: "idea 2",
    tag: "Inventions",
    username: "TonyStop",
    date: "2020-01-02",
  },
  {
    id: 3,
    text: "idea 3",
    tag: "Technology",
    username: "TonyFinished",
    date: "2020-01-03",
  },
  {
    id: 4,
    text: "idea 4",
    tag: "Software",
    username: "SteveRogers",
    date: "2020-01-04",
  },
];

//get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

//get single idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  //if no id found
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, message: `No idea with id ${req.params.id}` });
  }

  res.json({ success: true, data: idea });
});

//add an idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  console.log(idea);
  res.json({
    success: true,
    data: idea,
  });
});

module.exports = router;
