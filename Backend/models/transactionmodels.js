const mongoose= require("mongoose");

const TransactonSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Add text']
    },
    amount:{
        type:Number,
        required:[true,"Add amount"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model('Transaction',TransactonSchema);