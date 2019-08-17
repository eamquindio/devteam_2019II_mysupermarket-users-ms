const UserController = module.exports;
const UserService = require('../services/UsersService');

UserController.init = () => console.log(UserService);

UserController.findByName = async (req, res) => {
    try {
        const { params: { name } } = req;
        const user = await UserService.findByName(name);
        return res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('error')
    }
}   
