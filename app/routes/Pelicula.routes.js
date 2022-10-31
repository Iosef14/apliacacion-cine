module.exports = app => {
    const Pelicula = require("../controllers/Pelicula.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Pelicula.create);
  
    // Retrieve all Tutorials
    router.get("/", Pelicula.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Pelicula.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:ID_Pelicula", Pelicula.findOne);
  
    // Update a Tutorial with id
    router.put("/:ID_Pelicula", Pelicula.update);
  
    // Delete a Tutorial with id
    router.delete("/Pelicula/:ID_Pelicula", Pelicula.delete);
  
    // Delete all Tutorials
    router.delete("/", Pelicula.deleteAll);
  
    app.use("/api/Pelicula/", router);
  };
  