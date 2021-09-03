const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const cors = require('cors');

App.use(cors());

const Api = require('./routes/api');
//const Bomberos = require('./routes/bomberos');
const Clubes = require('./routes/clubes');
const Educacion = require('./routes/educacion');
const Salud = require('./routes/salud');
const Seguridad = require('./routes/seguridad');
const Transporte = require('./routes/transporte');

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: true})) //Si va a haber formularios en este servidor tiene que ir true
App.use(express.static(__dirname + '/public'));
App.use('/api', Api)
//App.use('/api/bomberos', Bomberos)
App.use('/api/clubes', Clubes)
App.use('/api/educacion', Educacion)
App.use('/api/salud', Salud)
App.use('/api/seguridad', Seguridad)
App.use('/api/transporte', Transporte)

module.exports = App