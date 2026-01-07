const dotEnv = require('dotenv')
dotEnv.config()

const envVariable = {
    port: process.env.PORT,
    mongodbURI: process.env.MONGODB_URI,
    geminiApi: process.env.GEMINI_API_KEY,
}

module.exports = envVariable