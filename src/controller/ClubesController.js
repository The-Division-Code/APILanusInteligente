const Clubes = require('../models/Clubes');

module.exports = {
    getAll: function(req,res){
        Clubes.find({})
        .then(club =>{
            if(club.length!= 0) return res.status(200).send({club})
            return res.status(204).send({message:"No hay clubes cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre del club;  type => Point; coordenates => primero latitud y luego longitud ej: -34.7233359,-58.3957713, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        const data ={ 
            type: "Club",
            properties:{
                name:req.body.name
            },
            geometry:{
                type: req.body.type,
                coordenates: req.body.coordenates
            }


            // lat: req.body.lat,
            // lon: req.body.lon,

        }
        const newClub = new Clubes(data)
        newClub.save()
        .then(Club => res.status(201).send({Club}))
        .catch(err => res.status(500).send({err}))
    }
}