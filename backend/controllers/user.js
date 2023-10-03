// Import modules using ES6 module syntax
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { sendCookie } from '../utils/features.js';
import validationResult from 'express-validator';




export const register = async (req, res, next) => {
    try {
        const {
            username,
            password,
            firstName,
            lastName,
            mobileNumber,
            email,
        } = req.body;

        //validation of data---Working phase
        //Working process done :-- commed due to testing phase


        // body('firstName', 'Enter a valid name').isLength({ min: 1 }).run(req);
        // body('lastName', 'Enter a valid name').isLength({ min: 1 }).run(req);
        // body('email', 'Enter a valid email').isEmail();
        // body('password', 'Password must be at least 5 characters').isLength({ min: 5 }).run(req);
        // body('phoneNumber', 'Enter a valid phone number').isLength({ min: 10, max: 10 }).run(req);
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return next(new ErrorHandler('Validation Error', 400, errors.array()));
        // }


        let user = await User.findOne({ email });

        if (user) {
            return next(new ErrorHandler("User Already Exist", 400));
        }

        const hashpassword = await bcrypt.hash(password, 10);

        // Create a new user object using array destructuring
        user = User.create({
            username: username,
            password: hashpassword,
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            email: email,
        })

        // const success = true
        const authToken = sendCookie(user, res, "Registered Successfully", 201);
        if (user) {
            res.send({ success: true, authToken, message: "Registered Successfully" });
        }
    } catch (error) {
        next(error)

        // res.status(400).json({ error: error.message }); // Send a JSON response with the error message
    }
};


export const login = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        //Working process done :-- commed due to testing phase


        // body('email', 'Enter a valid email').isEmail().run(req);
        // body('password', 'Password cannot be blank').exists().normalizeEmail().run(req);
        // const errorslog = validationResult(req);
        // if (!errorslog.isEmpty()) {
        //     return next(new ErrorHandler('Validation Error', 400, errorslog.array()));
        // }


        // console.log("req.body", email, password);
        const user = await User.findOne({ email });
        // console.log("user", user);

        if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("decoded", email, isMatch);

        if (!isMatch)
            return next(new ErrorHandler("Invalid Email or Password", 400));

        sendCookie(user, res, `Welcome back Programmer lets Built user reumesr , ${user.name}`, 200);
    } catch (error) {
        next(error);
        res.json({
            error
        })
    }
};


export const logout = (req, res) => {
    res.status(200)
        .cookie("token", "", {
            expires: new Date(Date.now()),
        })
        .json({
            success: true,
            user: req.user,
        });
};


export const userRegister = async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });

        if (existingUser) {
            return res.status(400).json({ error: "Username is already registered" });
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({ message: "Registration Successful" });
    } catch (error) {
        res.status(500).json({ error: "Registration failed. Please try again later." });
    }
};

export const userLogin = async (req, res) => {
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

export const userUpdate = async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.body._id }, req.body);
        const user = await User.findOne({ _id: req.body._id });
        res.send(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const check = (req, res) => {
    res.send('Working World!')
}

// module.exports = { userRegister, userLogin, userUpdate };
