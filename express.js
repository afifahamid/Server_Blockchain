const express = require(`express`)
const app = express();
const port = 1234;
const path = require(`path`)

console.log(express.static(path.join(__dirname,"Server_Blockchain/code")));
app.use(express.static(path.join(__dirname,"Server_Blockchain/code"))); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});