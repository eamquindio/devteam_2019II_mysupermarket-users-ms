const PersonController = module.exports;
const PersonService = require('../services/PersonService');

PersonController.save = async (req, res) => {
  const { body } = req;
  try {
    await PersonService.create(body);

    return res.send();
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

PersonController.find = async (req, res) => {
  try {
    const { params: { id } } = req;
    const person = await PersonService.find(id);

    return res.send(person);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

PersonController.edit = async (req, res) => {
  try {
    const { params: { id }, body } = req;
    const person = await PersonService.edit(id, body);

    return res.send(person);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

PersonController.delete = async (req, res) => {
  try {
    const { params: { id } } = req;
    const person = await PersonService.delete(id);

    return res.send(person);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

PersonController.findByName = async (req, res) => {
  try {
    const { query: { name } } = req;
    const person = await PersonService.findByName(name);

    return res.send(person);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

PersonController.listAll = async (req, res) => {
  try {
    const person = await PersonService.listAll();

    return res.send(person);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};
