const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UserService.init = () => console.log(UserRepository);

UserService.create = (user) => {
  console.log('creating user');

  return UserRepository.create(user);
};
