const Bomberos = require('../models/Bomberos');

module.exports = {
    getAll: function(req,res){
        Bomberos.find({})
        .then(bombero =>{
            if(bombero.length!= 0) return res.status(200).send({bombero})
            return res.status(204).send({message:"No hay cuarteles cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre del cuartel; address => Calle y altura;  type => Point; coordenates => primero latitud y luego longitud ej: -34.7233359,-58.3957713, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        const data ={ 
            type: "Bomberos",
            properties:{
                name:req.body.name
            },
            geometry:{
                type: req.body.type,
                coordenates: req.body.coordenates
            }
        }
        const newBomberos = new Bomberos(data)
        newBomberos.save()
        .then(bombero => res.status(201).send({bombero}))
        .catch(err => res.status(500).send({err}))
    }
}