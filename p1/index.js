import express from "express";

const app = express();
const port = 5000;
app.listen(port, () => {
  console.log("app is listening on port:", port);
});

// Routes
app.get("/", (req, res) => {
  res.send("You contacted the root path");
});

app.get("/uk", (req, res) => {
  res.send("You contacted the umair uk/ path");
});

app.get("/apple", (req, res) => {
  res.send("You contacted the apple path");
});

app.get("/potato", (req, res) => {
  res.send("You contacted the potato path");
});
// app.get("/:username", (req, res) => {
//   console.log(req.params)
//   res.send(`your now on the ${req.params.username} path`);
// });

// you can send the request with dynamic root with id .....

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  // u can also the html code also in the response like that
  let html = `<h1>Welcome to @${username}</h1>`;
  res.send(html);
});



app.get("/search",(req,res)=>{
  // console.log(req.query,'this is query');
  res.send(`Your query is ${req.query.q}`)
})