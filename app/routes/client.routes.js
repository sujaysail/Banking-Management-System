module.exports = app => {
    const clientController = require("../controllers/firstController");
  
    var router = require("express").Router();
  
    // Create a new Client
    router.post("/", clientController.create);
  
    // Retrieve all Clients
    router.get("/", clientController.findAll);
  
    // Retrieve a single Client with id
    router.get("/:id", clientController.findOne);
  
    // Update a CLient with id
    router.put("/:id", clientController.update);
  
    // Delete a Client with id
    router.delete("/:id", clientController.delete);
  
    // Delete all Tutorials
    router.delete("/", clientController.deleteAll);
  
    app.use('/api/client', router);
  };