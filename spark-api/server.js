const express = require("express");
const port = 5000;

const app = express();
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
