const express = require('express');
const PersonController = require('./controllers/PersonController');
<<<<<<< HEAD
const UserController = require('./controllers/UsersController')
=======
const UsersController = require('./controllers/UsersController');

>>>>>>> add the fuctionality of list All [resolves #16]
const router = express.Router();

// Persons Routes
router.get('/persons/:id', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id', PersonController.delete);
router.put('/persons/:id', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);

router.get('/users/all', UsersController.listAll);

// Users Routes
router.put('/users/:id', UserController.edit); // edit user


module.exports = router;
