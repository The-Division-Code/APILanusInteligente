const Transporte = require('../models/Transporte');

module.exports = {
    getAll: function(req,res){
        Transporte.find({})
        .then(transporte =>{
            if(transporte.length!= 0) return res.status(200).send({transporte})
            return res.status(204).send({message:"No hay lugares de transporte cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    create: function(req,res){
        const data ={ 
            type: "Transporte",
            properties:{
                name:req.body.name,
                type: req.body.tipo
            },
            geometry:{
                type: req.body.type,
                coordenates: req.body.coordenates
            }
        }
        const newTransporte = new Transporte(data)
        newTransporte.save()
        .then(transporte => res.status(201).send({transporte}))
        .catch(err => res.status(500).send({err}))
    }
}