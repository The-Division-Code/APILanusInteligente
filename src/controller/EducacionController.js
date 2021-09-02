const Educacion = require('../models/Educacion');

module.exports = {
    getAll: function(req,res){
        Educacion.find({})
        .then(educacion =>{
            if(educacion.length!= 0) return res.status(200).send({educacion})
            return res.status(204).send({message:"No hay centros educativos cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    create: function(req,res){
        const data ={ 
            type: "Educacion",
            properties:{
                name:req.body.name,
                public: req.body.public,
                dependence: req.body.dependence
            },
            geometry:{
                type: req.body.type,
                coordenates: req.body.coordenates
            }
        }
        const newEducacion = new Educacion(data)
        newEducacion.save()
        .then(educacion => res.status(201).send({educacion}))
        .catch(err => res.status(500).send({err}))
    }
}