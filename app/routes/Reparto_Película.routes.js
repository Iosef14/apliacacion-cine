module.exports = app => {
const Reparto_Película = require("../controllers/Reparto_Película.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Reparto_Película.create);
  
    // Retrieve all Tutorials
    router.get("/", Reparto_Película.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Reparto_Película.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Reparto_Película.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", Reparto_Película.update);
  
    // Delete a Tutorial with id
    router.delete("/Reparto_Pelicula/:id", Reparto_Película.delete);
  
    // Delete all Tutorials
    router.delete("/", Reparto_Película.deleteAll);
  
    app.use("/api/Reparto_Peliculas/", router);
  };
  