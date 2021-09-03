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
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre del destacamento; tipo => Comisaría, Comisaría de la mujer, bomberos, juzgados, destacamento provincial, etc  type => Point; coordenates => primero latitud y luego longitud ej: -34.7233359,-58.3957713, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        const data ={ 
            type: "Seguridad",
            properties:{
                name:req.body.name,
                tipo: req.body.tipo,
                address:req.body.address
            },
            geometry:{
                type: req.body.type,
                coordenates: req.body.coordenates
            }
        }
        const newSeguridad = new Seguridad(data)
        newSeguridad.save()
        .then(seguridad => res.status(201).send({seguridad}))
        .catch(err => res.status(500).send({err}))
    }
}