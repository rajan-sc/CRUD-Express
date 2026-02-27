const path = require('path')

const getProductData = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"))
};

const postProductData = (req, res) => {
    console.log("Data received:", req.body);
    res.json({
        message: "Product added successfully!",
        data: req.body
    });
}

module.exports = {
    getProductData,
    postProductData
}
