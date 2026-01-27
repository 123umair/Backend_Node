import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 4000;

let posts = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173"
}));

// Get all posts
app.get("/", (req, res) => {
  res.json({ posts });
});

// Create new post
app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  const id = uuidv4();

  posts.push({ id, username, content });
  res.redirect("http://localhost:5173");
});

// Get single post (for detail)
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);
  res.json({ post });
});

// 👉 Get post for edit
app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);
  res.json({ post });
});

// 👉 PATCH update post
app.patch("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.content = content;

  res.json({ post });
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  const prevLength = posts.length;

  posts = posts.filter(post => post.id !== id);

  if (posts.length === prevLength) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json({ message: "Post deleted successfully" });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
