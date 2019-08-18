const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.init = () => console.log(DB);

<<<<<<< HEAD
UserRepository.create = user => DB('users').insert(user);
=======
>>>>>>> [resolves #14] Correction find by user name
UserRepository.findByName = userName => DB('users').select('*').where({ userName });
