const express = require("express");
const dotenv= require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connect  =require("./databsae");
const cors = require("cors");
const app = express();
app.use(cors());

dotenv.config({path:'./.env'});
connect();
const transactions= require("./routes/transactionroutes");

if(process.env.NODE_ENV==="development"){
    app.use(morgan('dev'));
}
app.use(express.json())//allows to use body parser

app.use('/transactions',transactions);



const PORT = process.env.PORT|5000;

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));
