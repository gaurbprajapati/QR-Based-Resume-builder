const express = require("express");
const app = express.Router();

const { userRegister, userLogin, userUpdate } = require("../controllers/user.js");

app.post("/login", userLogin);

app.post("/register", userRegister);

app.post("/update", userUpdate);


module.exports = app;