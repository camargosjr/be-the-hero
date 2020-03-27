const express = require('express');
const Ongcontroller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);
routes.post('/incident', IncidentController.create);
routes.get('/incident', IncidentController.index);
routes.delete('/incident/:id', IncidentController.destroy);
routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

// Deixar essas rotas diponíveis para outros arquivos
module.exports = routes;