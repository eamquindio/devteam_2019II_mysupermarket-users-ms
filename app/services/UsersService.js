const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UserService.edit = (id, user) => {
    console.log('edit user')
    return UserRepository.edit(id, user);
}
UserService.create = (user) => {
    console.log('creating user');
    return UserRepository.create(user);
}

UserService.delete = (id) => {
    return UserRepository.delete(id);
}