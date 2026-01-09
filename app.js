const express = require('express');
const app = express();
const envVariable = require("./config/envVariables");
const connectDB = require('./config/connectDB');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const generateRouter = require('./route/generate.route')

//DB function calling
connectDB();

app.use(cors({
    origin: ['http://localhost:5173', 'https://code-sage-frontend-two.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.use('/api/v1/generate', generateRouter)



const port = envVariable.port || 3000

app.listen(port, () => {
    console.log(`Server is runnig on PORT ${port}`)
})