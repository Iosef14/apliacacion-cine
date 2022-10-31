const db = require("../models");
const Promocion = db.promocions;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ID_Funcion) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const promocion = {

    ID_Funcion: req.body.ID_Funcion,
    ID_Cine: req.body.ID_Cine,
    Descripcion: req.body.Descripcion,
    Descuento: req.body.Descuento,

    Estatus: req.body.Estatus ? req.body.Estatus : false


  };

  // Save Tutorial in the data
  
  Promocion.create(promocion)
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
    const ID_Funcion = req.query.ID_Funcion;
    var condition = ID_Funcion ? { ID_Funcion: { [Op.iLike]: `%${ID_Funcion}%` } } : null;
  
    Promocion.findAll({ where: condition })
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
  const ID_Promocion = req.params.ID_Promocion;

  Promocion.findByPk(ID_Promocion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + ID_Promocion
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const ID_Promocion = req.params.ID_Promocion;

  Promocion.update(req.body, {
    where: { ID_Promocion: ID_Promocion }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${ID_Promocion}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + ID_Promocion
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const ID_Promocion = req.params.ID_Promocion;


  Promocion.destroy({
    where: { ID_Promocion: ID_Promocion }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${ID_Promocion}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + ID_Promocion
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Promocion.destroy({
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
    Promocion.findAll({ where: { status: true } })
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
