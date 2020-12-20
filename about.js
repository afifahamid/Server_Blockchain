const express = require(`express`)

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to about page")
})

module.exports = router;