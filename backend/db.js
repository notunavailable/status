const mongoose = require("mongoose")
const URI = "mongodb+srv://cfrank:ZjaRxny3WPyar3r@testingbackend.pgvux.mongodb.net/testingbackend?retryWrites=true&w=majority";


const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("MongoDB successfully connected!")
}

module.exports = connectDB;

//cfrank
//ZjaRxny3WPyar3r