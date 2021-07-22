const express = require('express')
const app =express()
require("dotenv").config();
const fast2sms = require('fast-two-sms');

app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.get("/",(req,res)=>{
    res.send(res.render('index.ejs'))
})
app.post("/sendmessage",(req,res)=>{
    

var options = {authorization : process.env.API_KEY.toString() , message :req.body.message ,  numbers : [req.body.number]} 
fast2sms.sendMessage(options).then((msg)=>{
   res.send(msg);
}).catch((err)=>{
    console.req(err);
} );
})
app.listen(3000,console.log("server started at 3000"))