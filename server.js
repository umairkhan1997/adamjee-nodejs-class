const express = require('express');
const mainrouter = require('./routes/mainRoute');
const mongoose = require("mongoose");
const dbCnnection = require('./config/db')
const PORTS =  process.env.PORT|| 10000;

const app = express();


const urlParser = express.json();
app.use(urlParser);
app.use(mainrouter);

dbCnnection();




app.get('/',(req,res)=>{
console.log("Server Started")
})






app.listen(PORTS,()=>{
    console.log(`Server running on port`+PORTS);
})