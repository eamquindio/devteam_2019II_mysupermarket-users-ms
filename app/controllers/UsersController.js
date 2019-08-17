const UserController = module.exports;
const UserService = require('../services/UsersService');

UserController.init = () => console.log(UserService);

UserController.find = async (req, res) => {
  try {
    const { params: { id } } = req;
    const user = await UserService.find(id);

    return res.send(user);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};
