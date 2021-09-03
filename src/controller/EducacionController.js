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
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre de la institución; public => si es publica poner 1 y si es privada poner 0; dependence => las opciones válidas son: Primaria, Secundaria, Terciaria, Universitaria, Otras  type => Point; coordenates => primero latitud y luego longitud ej: -34.7233359,-58.3957713, solo separados por una coma, sin espacios'})
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