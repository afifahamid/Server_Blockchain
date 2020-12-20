const express = require(`express`)
const app = express();
const port = 2345;

app.get(`/` , (req , res) => {
    res.send("HELLOW AFIFA :)")
    var a=6
    console.log(a);
});

app.listen(port, () => {
    console.log(`Example app listning on port ${port}!`)
});