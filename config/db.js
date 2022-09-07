const mongoose = require("mongoose");


const dbCnnection = async()=>{
    try{
        mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          mongoose.connection.on('connected',()=>{
              console.log('connected')
          })
          mongoose.connection.on('error',(err)=>{
              console.log('error',err)
          })
        
    }
    catch(err){
        console.log("err"+err.message);
    }
}

module.exports = dbCnnection;