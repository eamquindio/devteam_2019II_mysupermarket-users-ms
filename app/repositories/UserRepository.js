const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.create = user => DB('users').insert(user);
UserRepository.findByName = userName => DB('users').select('*').where({ userName });
UserRepository.find = id => DB('users').select('*').where({ id });
UserRepository.delete = userId => DB('users').del().where({ userId });
UserRepository.listAll = () => DB('users').select('*');
UserRepository.edit = (userId, user) => DB('users').update(user).where({ userId });
