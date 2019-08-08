const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.listAll = () => DB('users').select('*');
