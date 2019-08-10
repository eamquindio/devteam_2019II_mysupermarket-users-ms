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

PersonService.edit = (id, person) => {
    console.log('edit person')

    return PersonRepository.edit(id, person);
}

PersonService.delete = (id) => {
    console.log('delete person')

    return PersonRepository.delete(id);
}

PersonService.findByName = (name) => {
    console.log('findByName person')

    return PersonRepository.findByName(name);
}


PersonService.listAll = (name) => {
    console.log('findByName person')

    return PersonRepository.listAll();
}
