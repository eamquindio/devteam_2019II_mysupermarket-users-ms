const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

UserService.init = () => console.log(UserRepository);

UserService.edit = (id, user) => {
    console.log('edit user')
    return UserRepository.edit(id, user);
}
