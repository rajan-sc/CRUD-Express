const {products} = require("../productData")

const getProductsName = (req,res)=>{
    const prod = products.map(x => x.name).join(", ")
    res.send(`<h1>Available Products: ${prod}</h1>`);
};

const postNewProducts = (req,res)=>{
    res.send('<h1>Add new products.</h1>');
};

const getProdById = (req,res)=>{
    const uID = parseInt(req.params.id);
    const s_prod = products.find(x => x.id === uID);
    if (s_prod){
        res.send(`${s_prod.name}`)
    } else{
        res.status(400).send("</h1>Product Not Found!</h1>");
    }
};

module.exports = {
    getProductsName,
    postNewProducts,
    getProdById
};

