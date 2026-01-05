import express from 'express'
const app = express()
const port = 4000
app.use(express.urlencoded({extended:true})) // means that if any type of data that are urlencoded formate then this middleware easily parse these data inside the req.body for understand the data
app.use(express.json()) // from the post method if sometime coming the json request then we can use this middleware like we will try now...


app.get("/register",(req,res)=>{
   const {user,password} = req.query
   console.log({user},'user')
    res.send(`hi we working and warm welcome to ${user}`)
})


// If the data is coming from the post request then these data is not coming from the querystring but goes in the request body.. so we can hndle the post request in two ways first we can access these inside the property of the request object..
// for understanding the expressjs  because in post method data will coming in diff formate then we can use a specific middlewares syntax = app.use(express.urlencoded({extended:true}))
app.post("/register",(req,res)=>{ 
  let {name}  = req.body
    res.send(`hi we working and warm welcome to ${name}`)
})

app.listen(port,(req,res)=>{
    console.log('we are listening on the port',port)
  
})