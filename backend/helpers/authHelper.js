const bcrypt = require('bcrypt')

const IncryptPassword = (password)=>{
let saltValue = 8
let Ipass = bcrypt.hash(password,saltValue)
return Ipass
}

module.exports = IncryptPassword