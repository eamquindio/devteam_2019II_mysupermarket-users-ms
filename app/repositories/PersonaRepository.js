const PersonaRepository = module.exports;
const DB = require('../utils/DB');

PersonaRepository.create = person => DB('persons').insert(person);

PersonaRepository.edit = (id, person) => DB('persons').update(person).where({ id });

PersonaRepository.delete = id => DB('persons').del().where({ id });

PersonaRepository.find = id => DB('persons').select('*').where({ id });

PersonaRepository.findByName = name => DB('persons').select('*').where({ name });

PersonaRepository.listAll = () => DB('persons').select('*');

