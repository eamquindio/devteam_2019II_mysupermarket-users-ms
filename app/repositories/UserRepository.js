const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.edit = (userId, user) => DB('users').update(user).where({ userId });


UserRepository.findByName = (name) => DB('users').select('*').where({ name });
