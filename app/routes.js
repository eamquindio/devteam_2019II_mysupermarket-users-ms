const express = require('express');
const PersonController = require('./controllers/PersonController');
const UserController = require('./controllers/UsersController')


const router = express.Router();

router.get('/persons/:id', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id', PersonController.delete);
router.put('/persons/:id', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);



// Users routers

router.get('/users/find_by_name', UserController.findByName);

module.exports = router;
