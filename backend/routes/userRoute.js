import express from "express";


import { userRegister, userLogin, userUpdate, check } from '../controllers/user.js';

const router = express.Router();

router.post("/login", userLogin);

router.post("/register", userRegister);

router.post("/update", userUpdate);

// router.get("/test",check);
router.get("/test", check);




export default router;