const UsersService = module.exports;
const UserRepository = require('../repositories/UserRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

UsersService.create = async (user) => {
  console.log('creating user');

  const userToValidate = await this.find(user.id);
  console.log(userToValidate);
  if (userToValidate) throw ErrorHandler.BaseError('user already exists', 409);

  return UserRepository.create(user);
};

UsersService.findByName = name => UserRepository.findByName(name);

UsersService.find = (user) => {
  console.log('find user');

  return UserRepository.find(user);
};

UsersService.delete = id => UserRepository.delete(id);
UsersService.listAll = () => UserRepository.listAll();
UsersService.edit = (id, user) => UserRepository.edit(id, user);
