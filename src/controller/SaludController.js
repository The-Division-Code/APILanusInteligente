const Salud = require('../models/Salud');

module.exports = {
    getAll: function(req,res){
        Salud.find({})
        .then(salud =>{
            if(salud.length!= 0) return res.status(200).send({salud})
            return res.status(204).send({message:"No hay centros de salud cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre de la institución; public => si es publica poner 1 y si es privada poner 0; dependence => las opciones válidas son: Nacional, Provincial, Municipal  type => Point; coordenates => primero latitud y luego longitud ej: -34.7233359,-58.3957713, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        const data ={ 
            type: "Salud",
            properties:{
                name:req.body.name,
                public: req.body.public,
                dependence: req.body.dependence
            },
            geometry:{
                type: req.body.type,
                coordenates: req.body.coordenates
            }


            // lat: req.body.lat,
            // lon: req.body.lon,

        }
        const newSalud = new Salud(data)
        newSalud.save()
        .then(salud => res.status(201).send({salud}))
        .catch(err => res.status(500).send({err}))
    }
}