const mongoose = require('mongoose');


exports.connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB successfully");

    }
    catch (e) {
        console.error("Error connecting to MongoDB:", e.message);
        process.exit(1); // Exit the process with failure
        
    }
}

