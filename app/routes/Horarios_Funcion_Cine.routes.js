module.exports = app => {
    const Horarios_Funcion_Cine = require("../controllers/Horarios_Funcion_Cine.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Horarios_Funcion_Cine.create);
  
    // Retrieve all Tutorials
    router.get("/", Horarios_Funcion_Cine.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Horarios_Funcion_Cine.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Horarios_Funcion_Cine.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", Horarios_Funcion_Cine.update);
  
    // Delete a Tutorial with id
    router.delete("/Horarios_Funcion_Cine/:id", Horarios_Funcion_Cine.delete);
  
    // Delete all Tutorials
    router.delete("/", Horarios_Funcion_Cine.deleteAll);
  
    app.use("/api/Horarios_Funcion_Cine/", router);
  };
  