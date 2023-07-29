const express = require('express')

const app = express()

app.get('/random', (req,res)=>{
    const randomNo = Math.floor(Math.random()*100)+1
    res.send({
        random: randomNo
    })
})

app.listen(8080, ()=>{
    console.log("Server Running")
})