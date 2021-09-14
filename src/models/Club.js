const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "Feature"
    },
    properties: {
        name:{
            type: String,
            required:true
        },
        address:{
            type:String,
            required:true,
        },
        height:{
            type: String,
            required:true
        }
    },
    geometry:{
        type:{
            type: String,
            required: true,
            default: "Point"
        },
        coordinates:{
            type:[Number],
            required:true,
            index:"2dsphere"
        }
    }    
}, {
    timestamps: true
});

const Club = mongoose.model('Club', ClubSchema)

module.exports = Club