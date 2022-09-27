const MunicipalDep = require('../models/MunicipalDep');

module.exports = {
    getAll: function(req,res){
        let all = MunicipalDep.find({})
        all.select('type properties geometry -_id')

        .then(municipalDep =>{
            if(municipalDep.length!= 0) return res.status(200).send({"type": "FeatureCollection","features": municipalDep})
            return res.status(204).send({message:"No hay centros de dependencias municipales cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre de la institución; address => Calle; altura; type => Point; coordenates => primero longitud y luego latitud ej: -58.3957713,-34.7233359, solo separados por una coma, sin espacios'})
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
                type: "Point",
                coordinates: coordinates
            }
        }
        const newMunicipalDep = new MunicipalDep(data)
        newMunicipalDep.save()
        .then(municipalDel => res.status(201).send({municipalDel}))
        .catch(err => res.status(500).send({err}))
    }
}