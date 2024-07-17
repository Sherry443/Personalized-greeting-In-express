const express = require('express')
const app = express()
require("dotenv").config()
const port =  process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Hello World")

})

app.get('/greeting/:name',(req,res)=>{
    const name=req.params.name;
    res.send(`Hello ${name} <br> Hope you are doing great`)
  
})

app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})


