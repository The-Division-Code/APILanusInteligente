const mongoose = require('mongoose');

const EducacionSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "Features"
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
                values:['Primaria','Secundaria','Terciaria','Universitaria','Otras'],
                message:'Los valores válidos son: Primaria / Secundaria / Terciaria / Universitarias / Otras'
            },
            address:{
                type:String,
                required:true,
                
            }
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

const Educacion = mongoose.model('Educacion', EducacionSchema)

module.exports = Educacion