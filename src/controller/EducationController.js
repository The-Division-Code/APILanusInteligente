const Education = require('../models/Education');

module.exports = {
    getAll: function(req,res){
        Education.find({})
        .then(education =>{
            if(education.length!= 0) return res.status(200).send({"type": "FeatureCollection","features":education})
            return res.status(204).send({message:"No hay centros educativos cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre de la institución; address => Calle; height => altura; public => si es publica poner 1 y si es privada poner 0; dependence => las opciones válidas son: Inicial, Primaria, Secundaria, Terciaria, Universitaria, Otras  type => Point; coordenates => primero longitud y luego latitud ej: -58.3957713,-34.7233359, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        let values = req.body.coordinates.split(",")
        let v1 = parseFloat(values[0])
        let v2 = parseFloat(values[1])
        let coordinates = [v1,v2]
        const data ={ 
            properties:{
                name:req.body.name,
                public: req.body.public,
                dependence: req.body.dependence,
                address:req.body.address,
                height:req.body.height
            },
            geometry:{
                type: "Point",
                coordinates: coordinates
            }
        }
        const newEducation = new Education(data)
        newEducation.save()
        .then(education => res.status(201).send({education}))
        .catch(err => res.status(500).send({err}))
    },
    
}