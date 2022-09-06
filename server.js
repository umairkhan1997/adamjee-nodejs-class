const express = require('express');
const mainrouter = require('./routes/mainRoute')
const PORT = 10000;

const app = express();


const urlParser = express.json();
app.use(urlParser);
app.use(mainrouter);





app.get('/',(req,res)=>{
console.log("Server Started")
})






app.listen(PORT,()=>{
    console.log(`Server running on port`+PORT);
})