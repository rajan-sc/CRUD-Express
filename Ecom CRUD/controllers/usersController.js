const {userData} = require("../userData")

const addNewUsers = (req,res)=>{
    res.send('<h1>Add new user.</h1>');
};

const getAllUsers = (req,res)=>{
    const prod = userData.map(x => x.name).join(", ")
    res.send(`<h1>Current users: ${prod}</h1>`);
};

const userNameById = (req,res)=>{
    const uID = parseInt(req.params.id);
    const s_prod = userData.find(x => x.id === uID);
    if (s_prod){
        res.send(`Username: ${s_prod.name}`)
    } else{
        res.status(400).send("</h1>User Not Found!</h1>");
    }
};

module.exports = {
    addNewUsers,
    getAllUsers,
    userNameById
}
