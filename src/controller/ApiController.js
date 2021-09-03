module.exports = {
    index: function(req,res){
        return res.status(200).json({
            local:{
            //     bomberos:{
            //         vista: 'http://localhost:4000/api/bomberos', 
            //         documentacion:'http://localhost:4000/api/bomberos/doc'
            // },
                clubes:{
                    vista: 'http://localhost:4000/api/clubes',
                    documentacion:'http://localhost:4000/api/clubes/doc'},
                Educacion: {
                    vista:'http://localhost:4000/api/educacion',
                    documentacion:'http://localhost:4000/api/educacion/doc'
            },
                salud:{
                    vista: 'http://localhost:4000/api/salud',
                    documentacion:'http://localhost:4000/api/salud/doc'
                },
                seguridad:{ 
                    vista:'http://localhost:4000/api/seguridad',
                    documentacion:'http://localhost:4000/api/seguridad/doc'
            },
                transporte:{
                    vista:'http://localhost:4000/api/transporte',
                    documentacion:'http://localhost:4000/api/transporte/doc'
                }
            },
            remote:{
                bomberos: 'https://lanusinteligente.divisioncode.com.ar/api/bomberos',
                clubes: 'https://lanusinteligente.divisioncode.com.ar/api/clubes',
                Educacion: 'https://lanusinteligente.divisioncode.com.ar/api/educacion',
                salud: 'https://lanusinteligente.divisioncode.com.ar/api/salud',
                seguridad: 'https://lanusinteligente.divisioncode.com.ar/api/seguridad',
                transporte:'https://lanusinteligente.divisioncode.com.ar/api/transporte'
            }
           
        })
    }
}