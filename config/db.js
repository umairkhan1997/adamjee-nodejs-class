const mongoose = require("mongoose");


const dbCnnection = async()=>{
    try{
        mongoose.connect('mongodb+srv://meesum:meesumBhai@cluster0.kn8k2oo.mongodb.net/?retryWrites=true&w=majority', {
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