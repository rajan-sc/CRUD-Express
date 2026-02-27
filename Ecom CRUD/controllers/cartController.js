const { monitorEventLoopDelay } = require("node:perf_hooks");
const {products} = require("../userData")


const addToCart = (req,res)=>{
    const uID = parseInt(req.params.id);
    res.send(`<h1>Product added to user cart with ID: ${uID}</h1>`);
};


const showCartById = (req, res)=>{
    const uID = parseInt(req.params.id);
    const s_prod = products.find(x => x.id === uID);
    if (s_prod){
        res.send(`User ${uID} cart items: ${s_prod.products}`)
    } else{
        res.status(400).send("</h1>User Not Found!</h1>");
    }
};


module.exports = {
    addToCart,
    showCartById
};
