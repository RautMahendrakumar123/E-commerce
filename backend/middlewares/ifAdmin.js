const jwt = require('jsonwebtoken')

const isAdmin = (req,res,next)=>{
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
        }
      })
      const {role}=payload;
      if(role!==1){
        return res.status(403).json({
            message: 'Forbidden: You Must Be an Admin'
        })
    }
    next();
}

module.exports=isAdmin