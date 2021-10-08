const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "Feature"
    },
    properties: {
        name:{
            type: String,
            required:true
        },
        public:{
            type: Boolean,
            required:true
        },
        dependence:{
            type: String,
            enum:{
                values:['Inicial','Primaria','Secundaria','Terciaria','Universitaria','Otras', 'Técnica'],
                message:'Los valores válidos son: Primaria / Secundaria / Terciaria / Universitarias / Otras / Técnica'
            }
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

const Education = mongoose.model('Education', EducationSchema)

module.exports = Education