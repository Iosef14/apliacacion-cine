module.exports = app => {
    const Cine = require("../controllers/Cine.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Cine.create);
  
    // Retrieve all Tutorials
    router.get("/", Cine.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", Cine.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:ID_Cine", Cine.findOne);
  
    // Update a Tutorial with id
    router.put("/:ID_Cine", Cine.update);
  
    // Delete a Tutorial with id
    router.delete("/Cine/:ID_Cine", Cine.delete);
  
    // Delete all Tutorials
    router.delete("/", Cine.deleteAll);
  
    app.use("/api/Cine/", router);
  };
  