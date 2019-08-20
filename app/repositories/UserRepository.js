const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.init = () => console.log(DB);

UserRepository.create = user => DB('users').insert(user);
