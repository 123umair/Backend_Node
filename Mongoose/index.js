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