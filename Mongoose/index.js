const mongoose = require('mongoose');

main()
    .then((res)=>{
        console.log("Connection is successfull")
    }).catch((err)=> console.log(err));

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/UmairMongo")  // now we connect with mongodb database named UmairMOngo
    //.connect() method is a async process so therefore it takes times for execution like database etc or any other actions...
    //it returns a promise so therefore we can handle by .then .catch these method
}


// now we are working on the Schema a blueprint for a collection..
// here we create a userschema like a blue print where we stored the data in these collection ..

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
const Employee = mongoose.model("Employee",userSchema) //employees collection name created 


// now here we can run  one command InsertMany that inser a multiple documents
User.insertMany([
    { name:"Tony", email:"tony@gmail.com", age:50},
    { name:"UK", email:"uk@gmail.com", age:40},
    { name:"MUK", email:"muk@gmail.com", age:30}
]).then((data) => {
    console.log(data)
})

// Mongoose use a operaitonal buffering ... 
//Operation buffering in Mongoose is a mechanism that queues model function calls (like find(), save(), insertMany(), etc.) internally until a successful connection to the MongoDB database has been established. 
// This feature is designed for convenience, allowing developers to use their Mongoose models immediately in their code without explicitly waiting for the connection promise to resolve. Mongoose handles the asynchronous nature of the connection in the background. 
// Key Aspects
// Default Behavior: Buffering is enabled by default. Mongoose will store operations for a certain period if the database connection isn't ready.
// Timeout: Operations will be buffered for a default time of 10,000ms (10 seconds). If the connection isn't established within this bufferTimeoutMS period, Mongoose will throw a timeout error, such as MongooseError: Operation users.find() buffering timed out after 10000ms.
// Common Source of Confusion: This behavior can be confusing because the application might appear to start without errors, but operations later fail with a timeout if the underlying connection never succeeded (e.g., due to an incorrect database URI or network restrictions). 