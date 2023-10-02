import jwt from 'jsonwebtoken';


export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  const duration = 10 * 60e3;
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: duration,
    })
    .json({
      success: true,
      message,
    });
};

// module.exports = { sendCookie };
