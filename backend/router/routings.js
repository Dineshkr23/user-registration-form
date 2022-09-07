const {join} = require('path');
const express = require('express');

const router = express.Router();

router.post('/form',(req,res)=>{
    // res.sendFile(join(__dirname,'..','..','public','index.html'))
    console.log("connected");
    res.json({name:"dinesh"});
})

module.exports={
    router
}