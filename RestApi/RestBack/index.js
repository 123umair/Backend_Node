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
  const {username,content} = req.body
  posts.push({username,content})
  res.redirect("http://localhost:5173")

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



