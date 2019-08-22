const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const PersonaRepository = require('../../app/repositories/PersonaRepository');
const Helper = require('../Helper');

const API = '/api/users-ms/users';
chai.use(chaiHttp);

// TODO: quitar despuest---------------------
console.log(app);
console.log(PersonaRepository);
console.log(assert);
console.log(API);
// -----------------------------------------

describe('Users CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });
});
