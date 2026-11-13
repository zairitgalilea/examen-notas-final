const Nota = require('../models/nota.model.js');

// Obtener todas las notas get
const obtenerNotas = async (req, res) => {
  try {
    const listaDeNotas = await Nota.find(); 
    res.status(200).json(listaDeNotas);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener las notas", detalle: error });
  }
};

//Crear una nota nueva post
const crearNota = async (req, res) => {
  try {
    const nuevaNota = new Nota(req.body); 
    const notaGuardada = await nuevaNota.save(); 
    res.status(201).json(notaGuardada);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al guardar la nota", detalle: error });
  }
};
module.exports = {
  obtenerNotas,
  crearNota
};