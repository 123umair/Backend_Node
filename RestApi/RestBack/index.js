import express from "express";
import cors from "cors";

const app = express();
const port = 4000;
app.use(express.urlencoded({ extended: true }));

let posts = [
  
];

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.json({ posts });
});

app.post('/posts',(req,res) => {
  console.log(req.body,"body")
  const {id,username,content} = req.body
  posts.push({id,username,content})
  res.redirect("http://localhost:5173")

})
app.get('/posts/:id',(req,res) => {
  const {id} = req.params
  let post = posts.find((p) => id === p.id)
  res.json({post})

})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



