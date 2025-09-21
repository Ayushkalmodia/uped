const express = require('express');
const {registerUser,loginUser,logoutUser,registerEducator,loginEducator,logoutEducator} = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

//Student Routes
router.post('/user/register',registerUser);
router.post('/user/login',loginUser);
router.post('/user/logout',logoutUser);

//Educator Routes
router.post('/educator/register',registerEducator);
router.post('/educator/login',loginEducator);
router.post('/educator/logout',logoutEducator);


module.exports = router;