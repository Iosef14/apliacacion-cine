module.exports = app => {
const Promocion = require("../controllers/Promocion.controller.js");
  
var router = require("express").Router();

// Create a new Tutorial
router.post("/", Promocion.create);

// Retrieve all Tutorials
router.get("/", Promocion.findAll);

// Retrieve all published Tutorials
router.get("/status", Promocion.findAllStatus);

// Retrieve a single Tutorial with id
router.get("/:ID_Promocion", Promocion.findOne);

// Update a Tutorial with id
router.put("/:ID_Promocion", Promocion.update);

// Delete a Tutorial with id
router.delete("/Promocion/:ID_Promocion", Promocion.delete);

// Delete all Tutorials
router.delete("/", Promocion.deleteAll);

app.use("/api/Promocion/", router);

};
