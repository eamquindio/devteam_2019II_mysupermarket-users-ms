const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

//test 2....
UserService.find = (user) => {
    console.log('find user')

    return UserRepository.find(user);
}
