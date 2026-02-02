const mongoose = require("mongoose")

main()
.then(() =>{
    console.log("Connection Successfull");

})
.catch((err)=>{
    console.log(err)
})

async function main()
{
    await  mongoose.connect("mongodb://127.0.0.1:27017/amazon")  
}



const bookSchema = new mongoose.Schema({
    title:{
        type:String,
         required:true,//  the require is a validation ... where this title is mendatory 

    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },

})


const Book = mongoose.model("Book",bookSchema)


// let book1 = new Book({
//     title:"Shar-e-iqbal",
//     author:"Faisal",
//     price:400
// })

// book1.save().then((res)=>{
//     console.log(res,'detail')
// })



let book2 = new Book({
    // title:"Shar-e-iqbal",   // book validation failed due to required:true,
    author:"Faisal",
    price:400
})

book2.save().then((res)=>{
    console.log(res,'detail')
})