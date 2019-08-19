const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.init = () => console.log(DB);

UserRepository.create = user => DB('users').insert(user);
UserRepository.findByName = userName => DB('users').select('*').where({ userName });
<<<<<<< HEAD
UserRepository.find = id => DB('users').select('*').where({ id });
=======
UserRepository.delete = userId => DB('users').del().where({ userId });
>>>>>>> [resolves #17] Functionality created: delete users
