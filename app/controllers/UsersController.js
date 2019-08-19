const UserController = module.exports;
const UserService = require('../services/UsersService');

UserController.init = () => console.log(UserService);

UserController.edit = async (req, res) => {
    try {
        const { params: { id }, body } = req;
        const user = await UserService.edit(id, body);
        return res.send();
    }catch(error){
        console.log(error);
        res.status(500).send('error');
    }
};
