module.exports = app => {
    const Comentarios_Pelicula = require("../controllers/Comentarios_Pelicula.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Comentarios_Pelicula.create);
  
    // Retrieve all Tutorials
    router.get("/", Comentarios_Pelicula.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Comentarios_Pelicula.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:ID_Opinion", Comentarios_Pelicula.findOne);
  
    // Update a Tutorial with id
    router.put("/:ID_Opinion", Comentarios_Pelicula.update);
  
    // Delete a Tutorial with id
    router.delete("/Comentarios_Pelicula/:ID_Opinion", Comentarios_Pelicula.delete);
  
    // Delete all Tutorials
    router.delete("/", Comentarios_Pelicula.deleteAll);
  
    app.use("/api/Comentarios_Pelicula/", router);
  };
  