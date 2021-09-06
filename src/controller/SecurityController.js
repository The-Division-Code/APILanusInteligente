const Security = require('../models/Security');

module.exports = {
    getAll: function(req,res){
        Security.find({})
        .then(security =>{
            if(security.length!= 0) return res.status(200).send({security})
            return res.status(204).send({message:"No hay comisarías cargadas aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre del destacamento; address => Calle; Height => altura; tipo => Comisaría, Comisaría de la mujer, Cuartel de Bomberos, Juzgado, Destacamento Provincial, etc  type => Point; coordenates => primero longitud y luego latitud ej: -58.3957713,-34.7233359, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        let values = req.body.coordinates.split(",")
        let v1 = parseFloat(values[0])
        let v2 = parseFloat(values[1])
        let coordinates = [v1,v2]
        const data ={ 
            type: "Seguridad",
            properties:{
                name:req.body.name,
                tipo: req.body.tipo,
                address:req.body.address,
                height:req.body.height
            },
            geometry:{
                type: req.body.type,
                coordinates: coordinates
            }
        }
        const newSecurity = new Security(data)
        newSecurity.save()
        .then(security => res.status(201).send({security}))
        .catch(err => res.status(500).send({err}))
    }
}