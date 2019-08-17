const UserController = module.exports;
const UserService = require('../services/UsersService');

UserController.init = () => console.log(UserService);

UserController.listAll = async (req, res) => {
    try {
      const user = await UserService.listAll();
  
      return res.send(user);
    } catch (error) {
      console.log(error);
  
      return res.status(500).send('error');
    }
  };
