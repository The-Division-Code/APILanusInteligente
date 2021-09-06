const mongoose = require('mongoose');

const ClubesSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "Features"
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
        coordenates:{
            type:[String],
            required:true,
            index:"2dsphere"
        }
    }    
}, {
    timestamps: true
});

const Clubes = mongoose.model('Clubes', ClubesSchema)

module.exports = Clubes