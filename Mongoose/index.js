const mongoose = require('mongoose');

main()
    .then((res)=>{
        console.log("Connection is successfull")
    }).catch((err)=> console.log(err));

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/UmairMongo")  // now we connect with mongodb database named UmairMOngo
    //.connect() method ia a async process so therefore it takes times for execution like database etc or any other actions...
    //it returns a promise so therefore we can handle by .then .catch these method
}


// now we are working on the Schema a blueprint for a collection..
// here we create a useschema like a blue print where we stored the data in these collection document..

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age:Number,
});

// ok now we create a Collection here.
// Generally we kept the same name of User of model with same to the colleciton name "User" 
// models is a class that is present inside the mongoose where it can return a newsubclass name User that we will create a documents
const User = mongoose.model("User",userSchema)
// after we can executed these code a collection is created in a mongodb with minimal changes the Collection name "User" can change a plural and to normal text "users" 
const Employee = mongoose.model("Employee",userSchema) //employees colleciton name created 


// now here we can run  one command InsetMany that inser a multiple documents
User.insertMany([
    { name:"Tony", email:"tony@gmail.com", age:50},
    { name:"UK", email:"uk@gmail.com", age:40},
    { name:"MUK", email:"muk@gmail.com", age:30}
]).then((data) => {
    console.log(data)
})

// Mongodb use a operaitonal buffering ... 