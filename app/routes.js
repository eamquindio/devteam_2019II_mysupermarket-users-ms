const express = require('express');
const PersonController = require('./controllers/PersonController');
const UserController = require('./controllers/UsersController')

const router = express.Router();

// Persons Routes
router.get('/persons/:id', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id', PersonController.delete);
router.put('/persons/:id', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);


// Users Routes
router.put('/users/:id', UserController.edit); // edit user
router.post('/users', UserController.save); // Create new users
router.delete('/users/:id', UserController.delete);



module.exports = router;
