const UsersService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UsersService.create = (user) => {
  console.log('creating user');

  return UserRepository.create(user);
};

UsersService.findByName = name => UserRepository.findByName(name);

UsersService.find = (user) => {
  console.log('find user');

  return UserRepository.find(user);
};

UsersService.delete = id => UserRepository.delete(id);

UsersService.listAll = () => UserRepository.listAll();
