const mongoose = require("mongoose");

const connect= async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
      
        console.log(`Connected:${conn.connection.host}`.red.underline.bold)
    }catch(err){
        console.log(`Error:${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connect;