const {
    readingProductName,
    findProductById
} = require("../services/productService");

const getProductsName = (req, res) => {
    const prod = readingProductName();
    res.send(`<h1>Available Products: ${prod}</h1>`);
};

const getProdById = (req, res) => {
    const product = findProductById(Number(req.params.id));

    if (product) {
        res.send(`<h1>${product.name}</h1>`);
    } else {
        res.status(404).send("<h1>Product Not Found!</h1>");
    }
};

const postNewProducts = (req,res)=>{
    res.send('<h1>Add new products.</h1>')
}

module.exports = {
    getProductsName,
    getProdById,
    postNewProducts
};
