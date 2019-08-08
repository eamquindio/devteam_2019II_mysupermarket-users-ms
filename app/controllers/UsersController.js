const UserController = module.exports;
const UserService = require('../services/UserService');

UserController.listAll = async (req, res) => {
    try {
        const user = await UserService.listAll();

        return res.send(user);
    }catch(error){
        console.log(error);
        res.status(500).send('error')
    }

}

