const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

dotenv.config()


const app = express()

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'));

app.use('/api/v1',require('./routes/authRoute'))
app.use('/api/v1',require('./routes/productRoute'))
app.use('/api/v1',require('./routes/paymentRoute'))


app.use(express.static(path.join(__dirname,'/client/build')))

app.get("*",(req,res)=> res.sendFile(path.join(__dirname,'/client/build/index.html')))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('connected to db')})
.catch(err=>{
    console.log('error-'+err)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('server listeneing on port ' + PORT)
})