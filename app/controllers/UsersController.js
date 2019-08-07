const UserController = module.exports;
<<<<<<< HEAD
const UserService = require('../services/UsersService');

UserController.edit = async (req, res) => {
    try {
        const { params: { id }, body } = req;
        const user = await UserService.edit(id, body);
        return res.send();
=======
const UserService = require('../services/UserService');


UserController.delete = async (req, res) => {
    try {
        const { params: { id } } = req;
        const user = await UserService.delete(id);

        return res.status(200).json({'success' : user});
>>>>>>> [resolves #17] functionality created: delete users
    }catch(error){
        console.log(error);
        res.status(500).send('error')
    }
}
<<<<<<< HEAD

UserController.save = async (req, res) => {
    const { body } = req;
    try {
        await UserService.create(body);
        return res.send();
    } catch(error) {
        console.log(error);
        res.status(500).send('error');
    }
}
=======
>>>>>>> [resolves #17] functionality created: delete users
