const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UserService.init = () => console.log(UserRepository);
