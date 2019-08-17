const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UserService.init = () => console.log(UserRepository);

UsersService.findByName = (name) => {
    console.log('findByName user');
    return UserRepository.findByName(name);
}