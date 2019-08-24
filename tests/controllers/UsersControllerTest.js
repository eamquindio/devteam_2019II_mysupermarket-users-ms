const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const UserRepository = require('../../app/repositories/UserRepository');
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

  it('find user test', async () => {
    await UserRepository.create({
      id: 1,
      user_id: 1,
      user_name: 'camilo',
      created_at: '2019-08-24T15:27:23.188Z',
      updated_at: '2019-08-24T15:27:23.188Z',
    });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, {
          id: 1,
          user_id: '1',
          user_name: 'camilo',
          mail: null,
          name: null,
          created_at: '2019-08-24T15:27:23.188Z',
          updated_at: '2019-08-24T15:27:23.188Z',
        });
      });
  });

  it('find user not found test', async () => chai
    .request(app)
    .get(`${API}/1`)
    .catch((error) => {
      assert.equal(error.status, 404);
    }));
});
