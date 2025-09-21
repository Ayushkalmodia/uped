const express = require('express');
const { authCourseMiddleware, authUserMiddleware } = require('../middlewares/auth.middleware');
const { addCourse,addLecture,getAllcourses } = require('../controllers/course.controller');
const router = express.Router();
const multer = require('multer');


const upload = multer({
    storage: multer.memoryStorage(),
});

//Create a new course
router.post('/create'
    ,authCourseMiddleware,
    upload.single('thumbnail')
    ,addCourse);

// Add a new lecture to a course
router.post('/create/:courseId/lecture',
    authCourseMiddleware,
    upload.single('video'),
    addLecture
)

// Get all courses
router.get('/',
    authUserMiddleware,
    getAllcourses
)

module.exports = router;