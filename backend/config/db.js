const mongoose = require("mongoose");
const {MONGODB_URL} = require("./env");

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log(`Connected to Data Base "MongoDB"`);
    }
    catch(error) {
        console.error(`Error conncecting Data Base: ${error}`);
    };
}

module.exports = connectDB;