import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';
const app = express();
const port = 4000;
let posts = [];

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

console.log(posts,'posts')

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.json({ posts });
});

app.post('/posts',(req,res) => {
  let id = uuidv4()
  const {username,content} = req.body
  posts.push({id,username,content})
  res.redirect("http://localhost:5173")
  
})
app.get(`/posts/:id`,(req,res) => {
  const {id} = req.params
  let post = posts.find((p) => id == p.id)
  console.log(post,'this is your post')
  res.json({post})
  
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



