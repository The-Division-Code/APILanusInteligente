const Club = require('../models/Club');

module.exports = {
    getAll: function(req,res){
        Club.find({})
        .then(club =>{
            if(club.length!= 0) return res.status(200).send({"type": "FeatureCollection","features":club})
            return res.status(204).send({message:"No hay clubes cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre del club; address => Calle; Height => altura; type => Point; coordenates => primero latitud y luego longitud ej: -58.3957713,-34.7233359, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        let values = req.body.coordinates.split(",")
        let v1 = parseFloat(values[0])
        let v2 = parseFloat(values[1])
        let coordinates = [v1,v2]
        const data ={ 
            properties:{
                name:req.body.name,
                address:req.body.address,
                height:req.body.height
            },
            geometry:{
                type: req.body.type,
                coordinates: coordinates
            }
        }
        const newClub = new Club(data)
        newClub.save()
        .then(Club => res.status(201).send({Club}))
        .catch(err => res.status(500).send({err}))
    }
}