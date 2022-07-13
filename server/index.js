const express = require('express');
require('dotenv').config();
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors());
require('dotenv').config();
app.use(express.static('public'));
app.use(fileUpload());

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=>{
    console.log("Listening to port number "+ PORT);
}); 