const express = require('express');
const app = express()

const product = require("./routes/product")
const user = require("./routes/users")
const cart = require("./routes/cart")


app.use("/product",product);
app.use("/user",user);
app.use("/cart",cart);

app.listen(3000, ()=>{
    console.log("Sever started at port 3000.");
});

