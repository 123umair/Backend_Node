import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

let posts = [
  {
    username: "Umair khan",
    content: "Focus on your goal"
  },
  {
    username: "Fahad",
    content: "I'm learning Express.js"
  },
  {
    username: "Filipe",
    content: "Project Manager"
  }
];

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
