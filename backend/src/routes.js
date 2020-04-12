
const express = require('express'); /*importar o express */


const OngController = require('./Controllers/OngController');
const IncidentsController = require('./Controllers/IncidentsController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

/*const connection = require('./database/connection');*/

const routes = express.Router(); /* variável routes*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

  module.exports = routes;
