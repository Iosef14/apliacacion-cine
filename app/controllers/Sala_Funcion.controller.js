
const db = require("../models");
const Sala_Funcion = db.sala_Funcions;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ID_Pelicula) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const sala_Funcion = {

    ID_Pelicula: req.body.ID_Pelicula,
    Codigo_Sala: req.body.Codigo_Sala,
    Fecha_Funcion: req.body.Fecha_Funcion,
    Hora: req.body.Hora,

    Estatus: req.body.Estatus ? req.body.Estatus : false
   

  };

  // Save Tutorial in the data
  
   Sala_Funcion.create(sala_Funcion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const ID_Pelicula = req.query.ID_Pelicula;
    var condition = ID_Pelicula ? { ID_Pelicula: { [Op.iLike]: `%${ID_Pelicula}%` } } : null;
  
    Sala_Funcion.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const ID_Funcion = req.params.ID_Funcion;

  Sala_Funcion.findByPk(ID_Funcion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + ID_Funcion
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const ID_Funcion = req.params.ID_Funcion;

  Sala_Funcion.update(req.body, {
    where: { ID_Funcion: ID_Funcion }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${ID_Funcion}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + ID_Funcion
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const ID_Funcion = req.params.ID_Funcion;


  Sala_Funcion.destroy({
    where: { ID_Funcion: ID_Funcion }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${ID_Funcion}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + ID_Funcion
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Sala_Funcion.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllStatus = (req, res) => {
  Sala_Funcion.findAll({ where: { status: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
