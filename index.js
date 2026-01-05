import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("this is my first middleware that i will use it now ");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/umairroute", (req, res) => {
  res.send("Hello World by umair route");
});



app.get('/dynamic/:username',(req,res) => {

  res.send(`Hell from ${req.params.username}`)
}

)
app.listen(5000);




