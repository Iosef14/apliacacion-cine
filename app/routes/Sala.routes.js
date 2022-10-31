module.exports = app => {
    const Sala = require("../controllers/Sala.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Sala.create);
  
    // Retrieve all Tutorials
    router.get("/", Sala.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Sala.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:Codigo_Sala", Sala.findOne);
  
    // Update a Tutorial with id
    router.put("/:Codigo_Sala", Sala.update);
  
    // Delete a Tutorial with id
    router.delete("/Sala/:Codigo_Sala", Sala.delete);
  
    // Delete all Tutorials
    router.delete("/", Sala.deleteAll);
  
    app.use("/api/Sala/", router);
  };
  