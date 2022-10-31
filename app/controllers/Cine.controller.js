
const db = require("../models");
const Cine = db.cines;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const cine = {

    Nombre: req.body.Nombre,
    Direccion: req.body.Direccion,
    Telefono_Consultas: req.body.Telefono_Consultas,
    Estatus: req.body.Estatus ? req.body.Estatus : false
  };

  // Save Tutorial in the data
  
  Cine.create(cine)
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
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.iLike]: `%${Nombre}%` } } : null;

  Cine.findAll({ where: condition })
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
  const ID_Cine = req.params.ID_Cine;

  Cine.findByPk(ID_Cine)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + ID_Cine
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const ID_Cine = req.params.ID_Cine;

  Cine.update(req.body, {
    where: { ID_Cine: ID_Cine }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${ID_Cine}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + ID_Cine
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const ID_Cine = req.params.ID_Cine;


  Cine.destroy({
    where: { ID_Cine: ID_Cine }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${ID_Cine}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + ID_Cine
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Cine.destroy({
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
  Cine.findAll({ where: { status: true } })
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
