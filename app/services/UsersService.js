const UsersService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UsersService.init = () => console.log(UserRepository);
<<<<<<< HEAD

UsersService.create = (user) => {
  console.log('creating user');

  return UserRepository.create(user);
};
UsersService.findByName = name => UserRepository.findByName(name);

=======

UsersService.findByName = name => UserRepository.findByName(name);
>>>>>>> [resolves #14] Correction find by user name
