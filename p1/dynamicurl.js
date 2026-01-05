import express from "express";

const app = express();

const port = 2000;
app.use("/", (req, res) => {
  res.send("your now on the root path");
});


