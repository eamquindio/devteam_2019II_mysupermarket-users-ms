const UserService = module.exports;
const UserRepository = require('../repositories/UserRepository');


UserService.listAll = () => {
    console.log('findByName user')

    return UserRepository.listAll();
}

}