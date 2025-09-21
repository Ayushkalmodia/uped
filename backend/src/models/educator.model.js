const mongoose = require('mongoose');

const educatorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
    ,
    bio: {
        type: String,
    },
    expertise: {
        type: [String], 
    },
},{
    timestamps: true,
})

const educatorModel = mongoose.model('Educator', educatorSchema);

module.exports = educatorModel;