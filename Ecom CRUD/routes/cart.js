const express = require('express');
const router = express.Router();
const carController = require("../controllers/cartController")

router.post("/:id",carController.addToCart);
router.get("/:id",carController.showCartById);

module.exports = router;

