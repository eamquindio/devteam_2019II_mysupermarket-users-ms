const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

//test 2....
UserService.edit = (id, user) => {
    console.log('edit user')
    return UserRepository.edit(id, user);
}
