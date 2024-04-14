const mongoose = require("mongoose");
const connectDB = async()=>{
try {
 await mongoose.connect("mongodb+srv://sauravpandey0325:murTIYWmGpDgPYY4@cluster0.7rjfole.mongodb.net");
    console.log(`MongooseDB is connected sucessfully`)

} catch (error) {
    console.log("Database connection failed",error)
}
}
module.exports = connectDB;
