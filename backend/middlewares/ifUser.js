const express = require('express')


const isUser = (req,res,next)=>{
    const {auth} = req.headers['authorization'];
    if(auth){
        next()
    }else{
        res.status(401).send('Unauthorized');
    }
}

export default isUser