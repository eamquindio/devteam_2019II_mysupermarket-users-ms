const UsersService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UsersService.init = () => console.log(UserRepository);

UsersService.create = (user) => {
  console.log('creating user');

  return UserRepository.create(user);
};
UsersService.findByName = name => UserRepository.findByName(name);

