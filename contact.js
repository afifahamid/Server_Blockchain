
const express = require(`express`)

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("The contact : 12445678")
})

module.exports = router;