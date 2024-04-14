const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sauravpandey0325:murTIYWmGpDgPYY4@cluster0.7rjfole.mongodb.net/texaschat", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongooseDB is connected successfully`);
    } catch (error) {
        console.error("Database connection failed", error);
    }
};

module.exports = connectDB;
