module.exports = app => {
    const clientController = require("../controllers/firstController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", clientController.create);
  
    // Retrieve all Tutorials
    router.get("/", clientController.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", clientController.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", clientController.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", clientController.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", clientController.delete);
  
    // Delete all Tutorials
    router.delete("/", clientController.deleteAll);
  
    app.use('/api/client', router);
  };