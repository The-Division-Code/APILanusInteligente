module.exports = {
    index: function(req,res){
        return res.status(200).json({
            bomberos: 'http://localhost:4000/api/bomberos',
            clubes: 'http://localhost:4000/api/clubes',
            Educacion: 'http://localhost:4000/api/educacion',
            salud: 'http://localhost:4000/api/salud',
            seguridad: 'http://localhost:4000/api/seguridad',
            transporte:'http://localhost:4000/api/transporte'
        })
    }
}