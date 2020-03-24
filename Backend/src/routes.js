const express = require('express')

const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.store)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', incidentController.store)
routes.get('/incidents', incidentController.index)
routes.delete('/incidents/:id', incidentController.delete)


module.exports = routes;