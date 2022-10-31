const db = require("../models");
const Cartelera = db.carteleras;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ID_Cine) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const cartelera = {

    ID_Cine: req.body.ID_Cine,
    Nombre_Cine: req.body.Nombre_Cine,
    Estatus: req.body.Estatus ? req.body.Estatus : false
  };

  // Save Tutorial in the data
  
  Cartelera.create(cartelera)
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
  const ID_Cine = req.query.ID_Cine;
  var condition = ID_Cine ? { ID_Cine: { [Op.iLike]: `%${ID_Cine}%` } } : null;

  Cartelera.findAll({ where: condition })
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
  const ID_Cartelera = req.params.ID_Cartelera;

  Cartelera.findByPk(ID_Cartelera)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + ID_Cartelera
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const ID_Cartelera = req.params.ID_Cartelera;

  Cartelera.update(req.body, {
    where: { ID_Cartelera: ID_Cartelera }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${ID_Cartelera}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + ID_Cartelera
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const ID_Cartelera = req.params.ID_Cartelera;

  Cartelera.destroy({
    where: { ID_Cartelera: ID_Cartelera }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${ID_Cartelera}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + ID_Cartelera
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Cartelera.destroy({
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
  Cartelera.findAll({ where: { status: true } })
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
