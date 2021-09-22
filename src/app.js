const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const cors = require('cors');

App.use(cors());

const Api = require('./routes/api.js');

const Club = require('./routes/club.js');
const Education = require('./routes/education.js');
const Health = require('./routes/health.js');
const Security = require('./routes/security.js');
const Transport = require('./routes/transport.js');

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: true})) //Si va a haber formularios en este servidor tiene que ir true
App.use(express.static(__dirname + '/public'));
App.use('/api', Api)
App.use('/api/club', Club)
App.use('/api/education', Education)
App.use('/api/health', Health)
App.use('/api/security', Security)
App.use('/api/transport', Transport)

module.exports = App