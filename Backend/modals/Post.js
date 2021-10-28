const mongoose = require("mongoose")

const PostShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        
    },
    photo: {
        type: String,
        required: false
    },
    catagories: {
        type: String,
        required: false
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Post",PostSchema);