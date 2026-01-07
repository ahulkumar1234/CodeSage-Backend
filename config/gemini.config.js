const {GoogleGenAI} = require('@google/genai');
const envVariable = require('./envVariables');


const ai = new GoogleGenAI({
    apiKey: envVariable.geminiApi,
});


module.exports = ai