const express = require('express');

const router = express.Router()

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];


router.get('/',(req,res)=>{
    const s_name = courses.map(stu => stu.name).join(", ");
    res.send(`<h1>courses: ${s_name}</h1>`)
});

router.get('/:id',(req,res)=>{
    const s_id = parseInt(req.params.id)
    const s_name = courses.find(i => i.id === s_id)
    if (s_name){
        res.send(`<h1>course: ${s_name.name}, Description: ${s_name.description}</h1>`)
    }else{
        res.send(`<h1>course not found.</h1>`)
    }
})


module.exports = router;
