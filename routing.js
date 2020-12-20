var express = require (`express`);
var app = express();
var port = 2000;

var home = require("./home")
app.use("/home",home);

var about = require("./about")
app.use("/about",about);

var contact = require("./contact")
app.use("/contact",contact)

app.get('/',(req,res) => {
    res.send("Welcome")
})

app.listen(port , () => {
    console.log(`listening on port ${port}`)
})
