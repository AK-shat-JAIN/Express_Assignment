const express = require('express')

const app = express()
var conterValue = 0

app.use(express.json())
app.use(express.urlencoded())

app.post('/', (req,res)=>{
    conterValue = req.body.counter
    res.send({
        message : "Counter value saved"
    })
})

app.get('/increment', (req,res)=>{
    conterValue++;
    res.send({
        counter: conterValue
    })
})

app.get('/decrement', (req,res)=>{
    conterValue--;
    res.send({
        counter: conterValue
    })
})

app.listen(8080, ()=>{
    console.log("Server Running")
})