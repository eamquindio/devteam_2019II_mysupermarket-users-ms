const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.edit = (user_id, user) => DB('users').update(user).where({ user_id });

