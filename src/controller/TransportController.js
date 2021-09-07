const Transport = require('../models/Transport');

module.exports = {
    getAll: function(req,res){
        Transport.find({})
        .then(transport =>{
            if(transport.length!= 0) return res.status(200).send({transport})
            return res.status(204).send({message:"No hay lugares de transporte cargados aun"})
        })
        .catch(err => res.status(500).send({err}));
    },
    doc: function(req,res) {
        res.send({message:'Los campos obligatorios son: name => nombre del lugar; address => Calle; Height  altura; tipo => Terminal de colectivo, estación de tren, etc  type => Point; coordenates => primero longitud y luego latitud ej: -58.3957713,-34.7233359, solo separados por una coma, sin espacios'})
    },
    create: function(req,res){
        let values = req.body.coordinates.split(",")
        let v1 = parseFloat(values[0])
        let v2 = parseFloat(values[1])
        let coordinates = [v1,v2]
        const data ={ 
                properties:{
                    name:req.body.name,
                    type: req.body.tipo,
                    address:req.body.address,
                    height:req.body.height
                },
                geometry:{
                    type: req.body.type,
                    coordinates: coordinates
                }
        }
        const newTransport = new Transport(data)
        newTransport.save()
        .then(transport => res.status(201).send({transport}))
        .catch(err => res.status(500).send({err}))
    }
}