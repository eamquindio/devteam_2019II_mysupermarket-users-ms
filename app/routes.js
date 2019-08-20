const express = require('express');
const PersonController = require('./controllers/PersonController');
const UserController = require('./controllers/UsersController');

console.log(UserController);
const router = express.Router();

// Persons Routes
router.get('/persons/:id', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id', PersonController.delete);
router.put('/persons/:id', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);

module.exports = router;
// Users Routes
router.post('/users', UserController.save); // Create new users
router.get('/users/find_by_name/:name', UserController.findByName); // Find user by name
router.get('/users/:id', UserController.find); // Find user by id
router.delete('/users/:id', UserController.delete); // Delete User
// Users routes
router.get('/users/find_by_name/:name', UserController.findByName);
router.get('/users/all', UserController.listAll);


module.exports = router;
