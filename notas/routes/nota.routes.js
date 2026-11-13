const express = require('express');
const enrutador = express.Router();
const { obtenerNotas, crearNota } = require('../controllers/nota.controller.js');

enrutador.get('/', obtenerNotas);
enrutador.post('/', crearNota);

module.exports = enrutador;