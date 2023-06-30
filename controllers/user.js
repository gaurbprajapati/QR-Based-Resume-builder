const User = require("../models/userModel");

const userRegister = async (req, res) => {
    try {
        const newuser = new User(req.body);
        await newuser.save();
        res.send("Registration Successful");
    } catch (error) {
        res.status(400).json(error);
    }
};

const userLogin = async (req, res) => {
    try {
        const result = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });

        if (result) {
            res.send(result);
        } else {
            res.status(400).json("Login failed");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

const userUpdate = async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.body._id }, req.body);
        const user = await User.findOne({ _id: req.body._id });
        res.send(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { userRegister, userLogin, userUpdate };
