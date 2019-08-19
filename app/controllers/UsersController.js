const UserController = module.exports;
const UserService = require('../services/UsersService');

UserController.init = () => console.log(UserService);
