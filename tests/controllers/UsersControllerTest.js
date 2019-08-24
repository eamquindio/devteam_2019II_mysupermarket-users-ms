const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const UserRepository = require('../../app/repositories/UserRepository.js');
const Helper = require('../Helper');

const API = '/api/users-ms/users';
chai.use(chaiHttp);

describe('Users CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('create user test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 1, user_id: 1, user_name: 1, name: 'camilo',
    })
    .then(async () => {
      const userToAssert = await UserRepository.find(1);
      assert.equal(userToAssert.name, 'camilo');
    }));

  it('create user already exists test', async () => {
    await UserRepository.create({
      id: 1, user_id: 1, user_name: 1, name: 'camilo',
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1, user_id: 1, user_name: 1, name: 'camilo',
      })
      .catch((error) => {
        assert.equal(error.status, 500);
      });
  });
});
