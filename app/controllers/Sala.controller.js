
const db = require("../models");
const Sala = db.salas;
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
  const sala = {

    ID_Cine: req.body.ID_Cine,
    Nombre: req.body.Nombre,
    Tipo: req.body.Tipo,
    Cantidad_Asientos: req.body.Cantidad_Asientos,
    Estatus: req.body.Estatus ? req.body.Estatus : false
  };

  // Save Tutorial in the data
  
  Sala.create(sala)
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

  Sala.findAll({ where: condition })
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
  const Codigo_Sala = req.params.Codigo_Sala;

  Sala.findByPk(Codigo_Sala)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + Codigo_Sala
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const Codigo_Sala = req.params.Codigo_Sala;

  Sala.update(req.body, {
    where: { Codigo_Sala: Codigo_Sala }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${Codigo_Sala}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + Codigo_Sala
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const Codigo_Sala = req.params.Codigo_Sala;


  Sala.destroy({
    where: { Codigo_Sala: Codigo_Sala }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${Codigo_Sala}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + Codigo_Sala
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Sala.destroy({
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
  Sala.findAll({ where: { status: true } })
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
