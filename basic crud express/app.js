const express = require('express');
const app = express();

const home = require("./routes/home");
const student = require("./routes/student");
const course = require("./routes/course");
const invalid = require("./routes/invalid");

app.use("/",home);
app.use("/students",student);
app.use("/course",course);
app.use(invalid)


app.listen(3000,()=>{
    console.log("Server started on port 3000")
});


