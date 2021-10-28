const express = require ("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DB_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,

})
.then(console.log("connected")).catch((err) => console.log(err));

app.listen("5000",()=> {
    console.log("running app");
    console.log("running app");
});