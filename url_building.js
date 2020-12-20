const express = require('express');
const app = express()
const port = 3000; 

app.get('/',(req,res)=>{
    res.send("Welcome to server page")
})

app.get('/:id',(req,res)=>{
    res.send("Your ID is "+ req.params.id)
})

app.get('/search/:webname/:id',(req,res)=>{
    res.send(`Website Name is : ${req.params.webname} ,, ID Number is : ${req.params.id}`)
})

app.get('/find/:number([0-9]{10})',(req,res)=>{
    res.send(`Find Number ${req.params.number}`)
})

app.get('*',(req,res)=>{
    res.send(`Sorry! Page not found`)
})


app.listen(port, ()=>{
    console.log("listning on port "+port)
}) 