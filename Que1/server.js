const express = require('express')
const items = require('./data')

const app = express()

app.get('/',(req, res)=>{
    res.send('Welcome to Men & Women Dummy Data')
})

app.get('/men', (req,res)=>{
    res.send(items.mens_products)
})

app.get('/women', (req,res)=>{
    res.send(items.womens_products)
})

app.get('/other', (req,res)=>{
    res.status(404).send({
        message: "Page not Found"
    })
})

app.listen(8080, ()=>{
    console.log("Server Listening..")
})