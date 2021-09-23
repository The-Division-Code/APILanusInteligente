const Health = require('../models/Health');

module.exports = {
    getAll: function(req,res){
        let all = Health.find({})
        all.select('type properties geometry -_id')

        .then(health =>{
            if(health.length!= 0) return res.status(200).send({"type": "FeatureCollection","features": health})
            return res.status(204).send({message:"No hay centros de salud cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre de la institución; address => Calle; Hei altura; public => si es publica poner 1 y si es privada poner 0; dependence => las opciones válidas son: Nacional, Provincial, Municipal  type => Point; coordenates => primero longitud y luego latitud ej: -58.3957713,-34.7233359, solo separados por una coma, sin espacios'})
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
        const newHealth = new Health(data)
        newHealth.save()
        .then(health => res.status(201).send({health}))
        .catch(err => res.status(500).send({err}))
    }
}