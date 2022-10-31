module.exports = app => {
    const Cartelera = require("../controllers/Cartelera.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Cartelera.create);
  
    // Retrieve all Tutorials
    router.get("/", Cartelera.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Cartelera.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:ID_Cartelera", Cartelera.findOne);
  
    // Update a Tutorial with id
    router.put("/:ID_Cartelera", Cartelera.update);
  
    // Delete a Tutorial with id
    router.delete("/Cartelera/:ID_Cartelera", Cartelera.delete);
  
    // Delete all Tutorials
    router.delete("/", Cartelera.deleteAll);
  
    app.use("/api/Cartelera/", router);
  };
  