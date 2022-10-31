const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "HOLA Primera API sdasd" });
});


const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


require("./app/routes/Cartelera.routes")(app);
require("./app/routes/Cine.routes")(app);
require("./app/routes/Sala.routes")(app);
require("./app/routes/Pelicula.routes")(app);
require("./app/routes/Reparto_Película.routes")(app);
require("./app/routes/Sala_Funcion.routes")(app);
require("./app/routes/Promocion.routes")(app);
require("./app/routes/Comentarios_Pelicula.routes")(app);
require("./app/routes/Horarios_Funcion_Cine.routes")(app);
require("./app/routes/tutorial.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

