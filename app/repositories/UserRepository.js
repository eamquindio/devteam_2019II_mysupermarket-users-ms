const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.find = (user_id) => DB('users').select('*').where({ user_id });