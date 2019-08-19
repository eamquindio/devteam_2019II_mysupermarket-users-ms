const UserController = module.exports;

const UserService = require('../services/UsersService');

UserController.save = async (req, res) => {
  const { body } = req;
  try {
    await UserService.create(body);

    return res.send();
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

UserController.findByName = async (req, res) => {
  try {
    const { params: { name } } = req;
    const user = await UserService.findByName(name);

    return res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('error');
  }

  return null;
};

<<<<<<< HEAD
UserController.find = async (req, res) => {
  try {
    const { params: { id } } = req;
    const user = await UserService.find(id);
=======
UserController.delete = async (req, res) => {
  try {
    const { params: { id } } = req;
    const user = await UserService.delete(id);
>>>>>>> [resolves #17] Functionality created: delete users

    return res.send(user);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};
