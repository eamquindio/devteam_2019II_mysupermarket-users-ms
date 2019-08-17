const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UserService.init = () => console.log(UserRepository);

UserService.find = (user) => {
  console.log('find user');

  return UserRepository.find(user);
};
