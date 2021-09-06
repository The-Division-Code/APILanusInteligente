const mongoose = require('mongoose');

const SecuritySchema = new mongoose.Schema({
    type:{
        type: String,
        default: "Features"
    },
    properties: {
        name:{
            type: String,
            required:true
        },
        tipo:{
            type:String,
            required:true,
            default:'Comisaría'        
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

const Security = mongoose.model('Security', SecuritySchema)

module.exports = Security