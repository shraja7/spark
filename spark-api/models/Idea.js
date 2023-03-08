const mongoose = require("mongoose");

const IdeaSchema = new mongoose({
  text: {
    type: String,
    required: [true, "Please add a text field"],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
