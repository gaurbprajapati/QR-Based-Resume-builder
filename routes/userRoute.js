const express = require("express");
const User = require("../models/userModel");
const app = express.Router();

import { userRegister, userLogin, userUpdate } from "../controllers/user";

app.post("/login", userRegister);

app.post("/register", userLogin);

app.post("/update", userUpdate);


module.exports = app;