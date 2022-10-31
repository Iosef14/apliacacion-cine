
const db = require("../models");
const Pelicula = db.peliculas;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Titulo_Distribucion) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const pelicula = {

    Titulo_Distribucion: req.body.Titulo_Distribucion,
    Titulo_Original: req.body.Titulo_Original,
    Genero: req.body.Genero,
    Anio_Produccion: req.body.Anio_Produccion,
    Idioma_Original: req.body.Idioma_Original,
    Pais_Origen: req.body.Pais_Origen,
    URL_Trailer: req.body.URL_Trailer,
    Duracion: req.body.Duracion,
    Clasificacion: req.body.Clasificacion,
    Estreno_Oficial: req.body.Estreno_Oficial,
    Director: req.body.Director,
    Sinopsis: req.body.Sinopsis,

    Estatus: req.body.Estatus ? req.body.Estatus : false

  };

  // Save Tutorial in the data
  
  Pelicula.create(pelicula)
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
  const Titulo_Distribucion = req.query.Titulo_Distribucion;
  var condition = Titulo_Distribucion ? { Titulo_Distribucion: { [Op.iLike]: `%${Titulo_Distribucion}%` } } : null;

  Pelicula.findAll({ where: condition })
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
  const ID_Pelicula = req.params.ID_Pelicula;

  Pelicula.findByPk(ID_Pelicula)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + ID_Pelicula
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const ID_Pelicula = req.params.ID_Pelicula;

  Pelicula.update(req.body, {
    where: { ID_Pelicula: ID_Pelicula }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${ID_Película}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + ID_Película
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const ID_Pelicula = req.params.ID_Pelicula;


  Pelicula.destroy({
    where: { ID_Pelicula: ID_Pelicula }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${ID_Pelicula}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + ID_Pelicula
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Pelicula.destroy({
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
  Pelicula.findAll({ where: { status: true } })
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
