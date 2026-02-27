const path = require('path')

const getProductData = (req, res)=>{
    res.sendFile(path.join(__dirname,"..","view","product.html"))
};

module.exports = {
    getProductData
}
