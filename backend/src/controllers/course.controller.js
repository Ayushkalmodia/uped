const courseModel = require('../models/course.model');
const storageService = require('../services/storage.service');
const {v4: uuid} = require('uuid');


// Add a new course
const addCourse = async (req, res) => {

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

    const course = await courseModel.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        thumbnail: fileUploadResult.url,   
        educator: req.educator._id,        
        lectures: [],
        ratings: 0
    });

    res.status(201).json({
        success: true,
        message: "Course created successfully",
        course,
    })
}

// Add new lecture to a course
const addLecture = async (req, res) =>{
    try {
        const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid());

        const course = await courseModel.findById(req.params.courseId);

        if(!course){
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        if(course.educator.toString() != req.educator._id.toString()){
            return res.status(403).json({
                success: false,
                message: "You are not authorized to add lecture to this course",
            });
        }

        const newLecture = {
            title : req.body.title,
            description : req.body.description,
            videoUrl : fileUploadResult.url,
            duration: req.body.duration,
        }

        course.lectures.push(newLecture);
        await course.save();

        res.status(200).json({
            success: true,
            message: "Lecture added successfully",
            course,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

// Get all courses
const getAllcourses = async (req,res) =>{
    const courses = await courseModel.find({});
    res.status(200).json({
        success: true,
        courses
    })
}

module.exports = {
    addCourse,
    addLecture,
    getAllcourses
}