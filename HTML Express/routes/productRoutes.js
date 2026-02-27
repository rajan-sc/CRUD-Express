const express = require('express')
const router = express.Router()
const productsController = require("../controllers/productsController")

router.get("/", productsController.getProductData);
router.post("/",productsController.postProductData);

module.exports = router;
