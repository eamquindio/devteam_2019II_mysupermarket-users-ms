const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.init = () => console.log(DB);

UserRepository.listAll = () => DB('users').select('*');

