const express = require('express');
const router = express.Router();

const products = [
    {"id":1, "name": "TV"},
    {"id":2, "name": "Fridge"},
    {"id":3, "name": "Mobile"},
]

router.get("/",(req,res)=>{
    const prod = products.map(x => x.name).join(", ")
    res.send(`<h1>Available Products: ${prod}</h1>`);
});

router.post("/",(req,res)=>{
    res.send('<h1>Add new products.</h1>');
});


router.get("/:id",(req,res)=>{
    const uID = parseInt(req.params.id);
    const s_prod = products.find(x => x.id === uID);
    if (s_prod){
        res.send(`${s_prod.name}`)
    } else{
        res.status(400).send("</h1>Product Not Found!</h1>");
    }
});

module.exports = router;

