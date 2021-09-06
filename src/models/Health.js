const mongoose = require('mongoose');

const HealthSchema = new mongoose.Schema({
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
                values:['Nacional','Provincial','Municipal'],
                message:'Los valores válidos son: Nacional / Provincial / Municipal'
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

const Health = mongoose.model('Health', HealthSchema)

module.exports = Health