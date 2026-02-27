const express = require('express');
const app = express();

const products = require("./routes/productRoutes");

//Declared public folder as static
app.use(express.static("public"));
app.use(express.json()); // to parse the JSON data from the request body

app.use("/products", products);

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
