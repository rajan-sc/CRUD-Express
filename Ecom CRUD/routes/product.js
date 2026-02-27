const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")

router.get("/",productController.getProductsName);
router.post("/",productController.postNewProducts);
router.get("/:id",productController.getProdById);

module.exports = router;

