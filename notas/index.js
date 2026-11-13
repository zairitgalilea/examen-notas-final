const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rutasDeNotas = require('./routes/nota.routes.js');
const aplicacion = express();

aplicacion.use(cors());
aplicacion.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/base_de_notas')
  .then(() => console.log('Conexión exitosa a la base de datos MongoDB'))
  .catch(error => console.log('Error al conectar a MongoDB:', error));

aplicacion.use('/api/notas', rutasDeNotas);

aplicacion.listen(3000, () => {
  console.log('Servidor encendido y escuchando en http://localhost:3000');
});