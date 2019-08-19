const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.init = () => console.log(DB);

UserRepository.edit = (userId, user) => DB('users').update(user).where({ userId });
