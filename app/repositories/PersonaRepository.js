const PersonaRepository = module.exports;
const DB = require('../utils/DB');

PersonaRepository.create = (person) => DB('persons').insert(person);

PersonaRepository.find = (id) => DB('persons').select('*').where({ id });