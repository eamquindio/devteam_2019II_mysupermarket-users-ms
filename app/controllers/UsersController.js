const UserController = module.exports;
const UserService = require('../services/UsersService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

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

UserController.findByName = async (req, res, next) => {
  try {
    const { params: { name } } = req;
    const user = await UserService.findByName(name);

    if (user.length === 0) return res.status(204).send(user);

    return res.send(user);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

UserController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const user = await UserService.find(id);

    if (!user) return next(new ErrorHandler.BaseError('user not exists', 404));

    return res.send(user);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

UserController.delete = async (req, res) => {
  try {
    const { params: { id } } = req;
    const user = await UserService.delete(id);

    return res.send(user);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

UserController.listAll = async (req, res) => {
  try {
    const user = await UserService.listAll();

    return res.send(user);
  } catch (error) {
    console.log(error);

    return res.status(500).send('error');
  }
};

UserController.edit = async (req, res, next) => {
  try {
    const { params: { id }, body } = req;
    const user = await UserService.edit(id, body);

    if (!user) return next(new ErrorHandler.BaseError('person not exists', 404));

    return res.send(user);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
