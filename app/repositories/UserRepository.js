const UserRepository = module.exports;
const DB = require('../utils/DB');

<<<<<<< HEAD
UserRepository.edit = (userId, user) => DB('users').update(user).where({ userId });
UserRepository.create = (user) => DB('users').insert(user);
=======
UserRepository.delete = (user_id) => DB('users').del().where({ user_id });
>>>>>>> [resolves #17] functionality created: delete users
