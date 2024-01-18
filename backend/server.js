const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1',require('./routes/authRoute'))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('connected to db')})
.catch(err=>{
    console.log('error-'+err)
})

app.listen(process.env.PORT,()=>{
    console.log('server listeneing on port ' + process.env.PORT)
})