const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.init = () => console.log(DB);

UserRepository.findByName = (user_name) => DB('users').select('*').where({ user_name });