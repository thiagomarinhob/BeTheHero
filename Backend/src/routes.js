const express = require('express')

const routes = express.Router();

routes.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana 11',
        aluno: 'Thiago'
    })
})

module.exports = routes;