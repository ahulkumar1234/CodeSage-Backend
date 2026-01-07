const mongoose = require('mongoose');
const envVariable = require('./envVariables');


const connectDB = async () => {
    try {
        await mongoose.connect(envVariable.mongodbURI, {
            dbName: "code-reviewer",
        });
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}


Object.freeze(connectDB);

module.exports = connectDB