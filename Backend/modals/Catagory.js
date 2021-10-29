const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
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
    
);

module.exports = mongoose.model("Category",CategorySchema);