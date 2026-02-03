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
        min:10 // here this validation means that price 10 sy kam nhi hona chhahiy
    },
    discount: {
        type:Number,
        default:0  // validations that set the default if we can't set it..
    },
    category:{
        type:String,
        enum:['fiction','non-fiction']    // here in the values category only containe these two values without these values it should be given the error and the validaiton is failed 
    }

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



// let book2 = new Book({
//     // title:"Shar-e-iqbal",   // book validation failed due to required:true,
//     author:"Faisal",
//     price:400
// })

// book2.save().then((res)=>{
//     console.log(res,'detail')
// })


// once another validation is typecasting like that 

let book3 = new Book({
    title:"C++",
    author:"JhonDoe",
    // price:"ABCD"   // ValidationError: Book validation failed: price: Cast to Number failed for value "ABCD" (type string) .
    // so here you will give that type of data that will parse to number because from here if these values going to the database then it parse means convert it to given type number but these character string is not converting to the number there fore it give the typecast error....
    // so if we pass price:"234" then will parse to a number in the database because it should be parsed also we cal give the boolean values etc..
    price:"2000"
})

book3.save().then((res)=>{
    console.log(res,'detail')
})
.catch((err)=>{
    console.log(err,'error')
})

// let book4 = new Book({
//     title:"Shar-e-iqbal",
//     author:"Faisal",
//     price:5 // message: 'Path `price` (5) is less than minimum allowed value (10).',
// })

// book4.save().then((res)=>{
//     console.log(res,'detail')
// })

// let book5 = new Book({
//     title:"Shar-e-iqbal",
//     author:"Faisal",
//     price:50,
//     category:"fiction"
// })

// book5.save().then((res)=>{
//     console.log(res,'detail')
// })



// Now schema validation types only working if we can insert these data if we can update these data than the schema validation is not working............. like that

// here we can update it like that 
Book.findByIdAndUpdate("698222d751c987ee3c8d5db6",{price:-2},{runValidators:true}) // so here it store -2 if we will given the validations type.. min:10
// so here if we will allow the option [options.runValidators] «Boolean» if true, runs update validators on this command. Update validators validate the update operation against the model's schema

.then((res)=>{
    console.log(res)
})

