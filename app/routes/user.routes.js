module.exports = (app) => {
  const users = require("../controllers/user.contrioller");

  var router = require("express").Router();

  // Create a new users
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);

  // Retrieve all published users
  router.get("/published", users.findAllPublished);

  // Retrieve a single users with id
  router.get("/:id", users.findOne);

  // Update a users with id
  router.post("/:id", users.update);

  // Delete a users with id
  router.delete("/:id", users.delete);

  // Delete all users
  router.delete("/", users.deleteAll);

  app.use("/api/users", router);
};
