const path = require("path");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();
//static folder
app.use(express.static(path.join(__dirname, "public")));
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create route
app.get("/", (req, res) => {
  res.send({ message: "Welcome to random ideas API" });
});

const ideasRouter = require("./routes/ideas");
//add middleware
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
