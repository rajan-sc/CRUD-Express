const express = require('express');

const router = express.Router()

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }
];


router.get('/',(req,res)=>{
    const s_name = students.map(stu => stu.name).join(", ");
    res.send(`<h1>Students: ${s_name}</h1>`)
});

router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const s_name = students.find(stu => stu.id === id);

    if (s_name){
        res.send(`<h1>Students: ${s_name.name}</h1>`)
    }else{
        res.send(`<h1>Students not found.</h1>`)
    }
})


module.exports = router;
