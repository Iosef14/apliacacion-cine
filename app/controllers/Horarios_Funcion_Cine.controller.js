
const db = require("../models");
const Horarios_Funcion_Cine = db.horarios_Funcion_Cines;
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ID_Cartelera) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const horarios_Funcion_Cine = {

    ID_Cartelera: req.body.ID_Cartelera,
    ID_Funcion: req.body.ID_Funcion,
    Fecha_Funcion: req.body.Fecha_Funcion,
    Hora_Funcion: req.body.Hora_Funcion,
    Subtitulos_Espaniol_SI_NO: req.body.Subtitulos_Espaniol_SI_NO,

    Estatus: req.body.Estatus ? req.body.Estatus : false
   

  };

  // Save Tutorial in the data
  
  Horarios_Funcion_Cine.create(horarios_Funcion_Cine)
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
    const ID_Cartelera = req.query.ID_Cartelera;
    var condition = ID_Cartelera ? { ID_Cartelera: { [Op.iLike]: `%${ID_Cartelera}%` } } : null;
  
    Horarios_Funcion_Cine.findAll({ where: condition })
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
  const id = req.params.id;

  Horarios_Funcion_Cine.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Horarios_Funcion_Cine.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Horarios_Funcion_Cine.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Horarios_Funcion_Cine.destroy({
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
  Horarios_Funcion_Cine.findAll({ where: { status: true } })
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
