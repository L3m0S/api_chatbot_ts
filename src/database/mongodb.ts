import mongoose from "mongoose";

const uri = 'mongodb://localhost/chatBot';

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect(uri, options)
    .then(() => console.log("Connected to database..."))
    .catch(err => console.log("Error connection to database", err));

mongoose.Promise = global.Promise;

export { mongoose };