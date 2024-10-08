const Transaction =require('../models/transactionmodels');


//get all transactions using route and access public

exports.getTransactions=async(req,res,next)=>{
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        });

    }catch(err){
        return res.status(500).json({
            success:false,
            error:'Server error"'
        })

    }
}

//add transactions using post method
exports.addTransactions=async(req,res,next)=>{
    try{
    const {text,amount}=req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201)//suucessfull
    .json({
        success:true,
        data:transaction
    });}
    catch(err){
       if(err.name==="ValidationError"){
        const messages=Object.values(err.errors).map(val=>val.message);
        return res.status(400).json({success:false,error:messages});//client error

       }else{
        return res.status(500).json({
            success:false,
            error:'Server error"'
        })

       }
    }
    
}

//delete transaction using delete method

exports.deleteTransactions=async(req,res,next)=>{
    try{
    const transaction = await Transaction.findById(req.params.id);
    if(!transaction){
        return res.status(404).json({
            success:false,
            error:"No transaction"
        })
    }
    await transaction.deleteOne();
    return res.status(200).json({
        success:true,
        data:{}
    })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            error:'Server error"'

    });
}
}

