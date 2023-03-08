const express = require("express");
const router = express.Router();

const Idea = require("../models/Idea");

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
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//get single idea
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//add an idea
router.post("/", async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//update and idea
router.put("/:id", async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      {
        new: true,
      }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

//delete an idea
router.delete("/:id", (req, res) => {
  //find idea id to delete
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, message: `No idea with id ${req.params.id}` });
  }

  //remove idea from ideas array
  const index = ideas.indexOf(idea);
  ideas.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
