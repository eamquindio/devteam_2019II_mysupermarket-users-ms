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
