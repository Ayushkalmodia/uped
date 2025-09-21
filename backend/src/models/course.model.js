const mongoose = require('mongoose');

const lectureSchema = mongoose.Schema({
    title : {type: String, required: true},
    description : {type : String, required: true},
    videoUrl : {type : String, required: true},
    duration: {type: Number, required: true}, // duration in minutes
})

const courseSchema = mongoose.Schema({
    title: {type: String,required: true},
    description : {type : String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String},
    educator: {type: mongoose.Schema.Types.ObjectId, ref: 'Educator', required: true},
    lectures: [lectureSchema],
    price: {type: Number, required: true},
    ratings: {type: Number, default: 0},
},{
    timestamps: true,
})

const courseModel = mongoose.model('Course',courseSchema);

module.exports = courseModel;