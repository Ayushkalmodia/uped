const educatorModel = require('../models/educator.model');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


// Educator Authentication Middleware
const authCourseMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const educator = await educatorModel.findById(decoded.educatorId); // ✅ correct key

    if (!educator) {
      return res.status(404).json({
        success: false,
        message: "Educator not found",
      });
    }

    req.educator = educator;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

// User Authentication Middleware
const authUserMiddleware = async (req,res,next) => {
  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({
      success: false,
      message: "Please Login first"
    })
  }

  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.userId);

    if(!user){
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    req.user = user;
    next();
  } catch (error) 
  {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    })
  }
}

module.exports = {
    authCourseMiddleware,
    authUserMiddleware
}