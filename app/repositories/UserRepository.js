const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.edit = (userId, user) => DB('users').update(user).where({ userId });


UserRepository.findByName = (user_name) => DB('users').select('*').where({ user_name });
