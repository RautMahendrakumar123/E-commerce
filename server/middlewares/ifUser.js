const jwt = require('jsonwebtoken')

const isUser = (req,res,next)=>{
  if(!req.headers.authorization){
    return res.status(401).json({
        message: 'You Must Be Logged In First'
    })
  }
  const token = req.headers.authorization;
  
  jwt.verify(token,process.env.secretSTR, (err,payload)=>{
    if(err){
        return res.status(401).json({
            message:'Unauthorized: Invalid Token'
        })
    }else{
        req.userid=payload.id;
        next()
    }
  })
}

module.exports = isUser;