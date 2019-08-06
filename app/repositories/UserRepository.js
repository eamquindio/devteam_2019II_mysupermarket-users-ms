const UserRepository = module.exports;
const DB = require('../utils/DB');


UserRepository.findByName = (name) => DB('users').select('*').where({ name });

