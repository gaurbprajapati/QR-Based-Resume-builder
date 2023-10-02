import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';


const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "You are loging Yet...",
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);
  next();
};
module.exports = { isAuthenticated }