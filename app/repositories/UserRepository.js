const UserRepository = module.exports;
const DB = require('../utils/DB');

UserRepository.create = user => DB('users').insert(user).returning('*');
UserRepository.findByName = userName => DB('users').select('*').where({ userName });
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line camelcase
UserRepository.find = user_id => DB('users').select('*').where({ user_id }).first();
UserRepository.delete = userId => DB('users').del().where({ userId }).returning('*');
UserRepository.listAll = () => DB('users').select('*');
UserRepository.edit = (userId, user) => DB('users').update(user).where({ userId }).returning('*');
