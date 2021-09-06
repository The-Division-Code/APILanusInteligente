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
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre del lugar; address => Calle y altura; tipo => Terminal de colectivo, estación de tren, etc  type => Point; coordenates => primero latitud y luego longitud ej: -34.7233359,-58.3957713, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        const data ={ 
            type: "Transporte",
            properties:{
                name:req.body.name,
                type: req.body.tipo,
                address:req.body.address,
                height:req.body.height
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