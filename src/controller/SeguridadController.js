const Seguridad = require('../models/Seguridad');

module.exports = {
    getAll: function(req,res){
        Seguridad.find({})
        .then(seguridad =>{
            if(seguridad.length!= 0) return res.status(200).send({seguridad})
            return res.status(204).send({message:"No hay comisarías cargadas aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    create: function(req,res){
        const data ={ 
            type: "Seguridad",
            properties:{
                name:req.body.name,
                tipo: req.body.tipo,
            },
            geometry:{
                type: req.body.type,
                coordenates: req.body.coordenates
            }


            // lat: req.body.lat,
            // lon: req.body.lon,

        }
        const newSeguridad = new Seguridad(data)
        newSeguridad.save()
        .then(seguridad => res.status(201).send({seguridad}))
        .catch(err => res.status(500).send({err}))
    }
}