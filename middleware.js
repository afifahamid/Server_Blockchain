const express = require(`express`)
const app = express();
const port = 5000;

app.get(`/` , (req , res) => {
    res.send("HELLOW AFIFA :)")
    var a = 6
    console.log(a);
});

app.get(`/home` , (req , res) => {
    res.send("THIS IS YOUR FIRST PROJECT !")
    var b = 8
    console.log(b); 
});

app.get(`/message` , (req , res) => {
    res.send("KEEP ON WORKING HARD !!")
    var c = a + b;
    console.log("The result is : " + c);
});

app.get(`/information` , (req , res) =>{
    res.send(
        "CEO :  Mr. M.Hamid , Manager :  Mr. M.Tariq , Assistant_manager :  Mr. M.Shams ."  
)
});

app.get(`/contact` , (req , res) => {
    res.send(
        "contact: 123456789"
        )
});

app.listen(port, () => {
    console.log(`Example app listning on port ${port}!`)
});