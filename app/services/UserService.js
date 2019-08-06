const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');


UserService.findByName = (name) => {
    console.log('findByName user')

    return UserRepository.findByName(name);
}