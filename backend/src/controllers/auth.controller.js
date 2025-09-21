const userModel = require('../models/user.model');
const educatorModel = require('../models/educator.model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register User
const registerUser = async (req,res) => {
    const {fullname,email,password} = req.body;

    const userExists = await userModel.findOne({email});

    if(userExists){
        return res.status(400).json({
            message : "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        fullName: fullname,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({
        userId: user._id
    }, process.env.JWT_SECRET)

    res.cookie('token',token);
    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    });
}

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
        { userId: user._id},
        process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    });
};

// Logout User
const logoutUser = (req,res) =>{
    res.clearCookie('token');
    res.status(200).json({
        message: "User logged out successfully"
    });
}

// Register Educator
const registerEducator = async (req , res) => {
    const {fullname,email,password} = req.body;
    const userExists = await educatorModel.findOne({
        email
    })

    if(userExists){
        return res.status(400).json({
            message: "Educator already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const educator = await educatorModel.create({
        name: fullname,
        email,
        password: hashedPassword,
    })

    const token = jwt.sign({
        educatorId : educator._id
    },process.env.JWT_SECRET)

    res.cookie('token',token);
    res.status(201).json({
        message: "Educator registered successfully",
        educator : {
            id: educator._id,
            name: educator.name,
            email: educator.email,
        }
    })
}

// Login Educator
const loginEducator = async(req,res) => {
    const {email,password} = req.body;

    const educator = await educatorModel.findOne({
        email
    })

    if(!educator){
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const isMatch = await bcrypt.compare(password,educator.password);

    if(!isMatch){
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        educatorId : educator._id
    },process.env.JWT_SECRET)

    res.cookie('token',token);

    res.status(200).json({
        message: "Educator logged in successfully",
        educator : {
            id: educator._id,
            name: educator.name,
            email: educator.email,
        }
    })
}

// Logout Educator
const logoutEducator = (req,res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: "Educator logged out successfully"
    })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerEducator,
    loginEducator,
    logoutEducator
}