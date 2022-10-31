module.exports = app => {
    const Sala_Función = require("../controllers/Sala_Funcion.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Sala_Función.create);
  
    // Retrieve all Tutorials
    router.get("/", Sala_Función.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Sala_Función.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:ID_Funcion", Sala_Función.findOne);
  
    // Update a Tutorial with id
    router.put("/:ID_Funcion", Sala_Función.update);
  
    // Delete a Tutorial with id
    router.delete("/Sala_Funcion/:ID_Funcion", Sala_Función.delete);
  
    // Delete all Tutorials
    router.delete("/", Sala_Función.deleteAll);
  
    app.use("/api/Sala_Funcion/", router);
  };
  