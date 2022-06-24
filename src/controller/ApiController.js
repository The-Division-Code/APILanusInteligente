module.exports = {
    index: function(req,res){
        return res.status(200).json({
            // local:{
            //     bomberos:{
            //         vista: 'http://localhost:4000/api/bomberos', 
            //         documentacion:'http://localhost:4000/api/bomberos/doc'
            // },
               // clubes:{
                 //   vista: 'http://localhost:4000/api/club',
                   // documentacion:'http://localhost:4000/api/club/doc'},
                // Educacion: {
                   // vista:'http://localhost:4000/api/education',
                   // documentacion:'http://localhost:4000/api/education/doc'
            // },
               // salud:{
                 //   vista: 'http://localhost:4000/api/health',
                   // documentacion:'http://localhost:4000/api/health/doc'
               // },
                //seguridad:{ 
                  //  vista:'http://localhost:4000/api/security',
                    //documentacion:'http://localhost:4000/api/security/doc'
            //},
              //  transporte:{
                //    vista:'http://localhost:4000/api/transport',
                  //  documentacion:'http://localhost:4000/api/transport/doc'
                //}
            //},
            remote:{
                clubes:{
                    vista: 'https://lanusinteligente.divisioncode.net.ar/api/club',
                    documentacion:'https://lanusinteligente.divisioncode.net.ar/api/club/doc'},
                Educacion: {
                    vista:'https://lanusinteligente.divisioncode.net.ar/api/education',
                    documentacion:'https://lanusinteligente.divisioncode.net.ar/api/education/doc'
            },
                salud:{
                    vista: 'https://lanusinteligente.divisioncode.net.ar/api/health',
                    documentacion:'https://lanusinteligente.divisioncode.net.ar/api/health/doc'
                },
                seguridad:{ 
                    vista:'https://lanusinteligente.divisioncode.com.ar/api/security',
                    documentacion:'https://lanusinteligente.divisioncode.net.ar/api/security/doc'
            },
                transporte:{
                    vista:'https://lanusinteligente.divisioncode.com.ar/api/transport',
                    documentacion:'https://lanusinteligente.divisioncode.net.ar/api/transport/doc'
                }
            }
           
        })
    }
}
