const UserController = module.exports;
const UserService = require('../services/UserService');

UserController.findByName = async (req, res) => {
    try {
        const { query: { name } } = req;
        const user = await UserService.findByName(name);

        return res.send(user);
    } catch(error){
        console.log(error);
        res.status(500).send('error')
    }
}

