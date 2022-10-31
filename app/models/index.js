const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.carteleras = require("./Cartelera.models.js")(sequelize, Sequelize);
db.cines = require("./Cine.models.js")(sequelize, Sequelize);
db.salas = require("./Sala.models.js")(sequelize, Sequelize);
db.peliculas = require("./Pelicula.models.js")(sequelize, Sequelize);
db.reparto_Películas = require("./Reparto_Película.models.js")(sequelize, Sequelize);
db.sala_Funcions = require("./Sala_Funcion.models.js")(sequelize, Sequelize);
db.promocions = require("./Promocion.models.js")(sequelize, Sequelize);
db.comentarios_Peliculas = require("./Comentarios_Pelicula.models.js")(sequelize, Sequelize);
db.horarios_Funcion_Cines = require("./Horarios_Funcion_Cine.models.js")(sequelize, Sequelize);
db.tutorials = require("./tutorial.models.js")(sequelize, Sequelize);





module.exports = db;
