const express = require('express');
const PersonController = require('./controllers/PersonController');

const router = express.Router();

router.get('/persons/:id', PersonController.find);
router.post('/persons', PersonController.save);

module.exports = router;
