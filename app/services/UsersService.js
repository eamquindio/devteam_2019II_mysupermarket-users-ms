const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');

//test 2....

UserService.listAll = (name) => {
UserService.listAll = () => {
    console.log('findByName user')
    return UserRepository.listAll();
}

}