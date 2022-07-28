const express = require('express');
require('dotenv').config();
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require('mongoose');

const api = process.env.API_URL;
const bodyParser = require('body-parser');
const morgan = require('morgan');

//routers
const userRouter = require('./routers/users');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));





app.use(express.json());
app.use(cors());
app.options('*',cors());
require('dotenv').config();
app.use(express.static('public'));
app.use(fileUpload());


const PORT = process.env.PORT || 3001;


//Routes
app.use(`${api}/users`, userRouter);

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATABASE
}).then(()=>{
    console.log("Database Connection is ready")
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT, ()=>{
    console.log("Listening to port number "+ PORT);
}); 