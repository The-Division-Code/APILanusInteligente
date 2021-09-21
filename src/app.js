const express = require('express');
const bodyParser = require('body-parser');
let log4js = require('log4js');
const App = express();

const cors = require('cors');

App.use(cors());

const Api = require('./routes/api');
//const Bomberos = require('./routes/bomberos');
const Club = require('./routes/club');
const Education = require('./routes/education');
const Health = require('./routes/health');
const Security = require('./routes/security');
const Transport = require('./routes/transport');

    // Paquete de registro de errores

    log4js.configure({
        appenders: {
            out: { type: 'console' },
            app: { type: 'file', filename: 'application.log' }
        },
        categories: {
            default: { appenders: [ 'out', 'app' ], level: 'info' }
        }
    });
    let logger = log4js.getLogger('normal');
    App.use(log4js.connectLogger(logger, {level: log4js.levels.INFO}));

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: true})) //Si va a haber formularios en este servidor tiene que ir true
App.use(express.static(__dirname + '/public'));
App.use('/api', Api)
//App.use('/api/bomberos', Bomberos)
App.use('/api/club', Club)
App.use('/api/education', Education)
App.use('/api/health', Health)
App.use('/api/security', Security)
App.use('/api/transport', Transport)

module.exports = App