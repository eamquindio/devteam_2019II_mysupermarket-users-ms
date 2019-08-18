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

// Users Routes
<<<<<<< HEAD
router.post('/users', UserController.save); // Create new users
// Users routes
=======
>>>>>>> [resolves #14] Correction find by user name
router.get('/users/find_by_name/:name', UserController.findByName);

module.exports = router;
