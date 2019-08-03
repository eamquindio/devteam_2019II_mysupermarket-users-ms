const PersonController = module.exports;
const PersonService = require('../services/PersonService');

PersonController.save = async (req, res) => {
    const { body } = req;
    try {
    await PersonService.create(body);

    return res.send();
    }catch(error){
        console.log(error);
        res.status(500).send('error')
    }
}

PersonController.find = async (req, res) => {
    try {
        const { params: { id } } = req;
        const person = await PersonService.find(id);

        return res.send(person);
    }catch(error){
        console.log(error);
        res.status(500).send('error')
    }
}