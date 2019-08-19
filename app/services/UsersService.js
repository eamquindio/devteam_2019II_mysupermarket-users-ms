const UsersService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UsersService.init = () => console.log(UserRepository);

UsersService.create = (user) => {
  console.log('creating user');

  return UserRepository.create(user);
};

UsersService.findByName = name => UserRepository.findByName(name);

<<<<<<< HEAD
UsersService.find = (user) => {
  console.log('find user');

  return UserRepository.find(user);
};
=======
UserService.delete = id => UserRepository.delete(id);
>>>>>>> [resolves #17] Functionality created: delete users
