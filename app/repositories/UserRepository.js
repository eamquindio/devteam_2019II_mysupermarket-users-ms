const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.create = user => DB('users').insert(user).returning('*');
UserRepository.findByName = userName => DB('users').select('*').where({ user_name: userName });
UserRepository.find = userId => DB('users').select('*').where({ user_id: userId }).first();
UserRepository.delete = userId => DB('users').del().where({ userId }).returning('*');
UserRepository.listAll = () => DB('users').select('*');
// eslint-disable-next-line camelcase
UserRepository.edit = (user_id, user) => DB('users').update(user).where({ user_id }).returning('*');
