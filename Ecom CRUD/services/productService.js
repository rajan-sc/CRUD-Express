const { products } = require("../productData");

const readingProductName = () => {
    return products.map(p => p.name).join(", ");
};

const findProductById = (id) => {
    return products.find(p => p.id === id);
};

module.exports = {
    readingProductName,
    findProductById
};
