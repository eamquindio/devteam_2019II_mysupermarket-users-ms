const PersonService = module.exports;
const PersonRepository = require('../repositories/PersonaRepository');

PersonService.create = (person) => {
    console.log('creating person')

    return PersonRepository.create(person);
}

PersonService.find = (person) => {
    console.log('find person')

    return PersonRepository.find(person);
}