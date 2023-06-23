const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const fs = require('fs');
const sinon = require('sinon');

const { expect } = chai;

chai.use(chaiHttp);

const dubleChocolateFile = {
  brands: [
    { id: 1, name: "Lindt & Sprungli" },
    { id: 2, name: "Ferrero" },
    { id: 3, name: "Ghirardelli" },
  ],
  chocolates: [
    { id: 1, name: "Mint Intense", brandId: 1 },
    { id: 2, name: "White Coconut", brandId: 1 },
    { id: 3, name: "Mon Chéri", brandId: 2 },
    { id: 4, name: "Mounds", brandId: 3 },
  ],
  nextChocolateId: 5
};

describe('Testando a API Cacau Trybe', function () {

  beforeEach(function() {
    sinon.stub(fs.promises, 'readFile')
      .resolves(JSON.stringify(dubleChocolateFile));

    sinon.stub(fs.promises, 'writeFile').resolves();
  });

  afterEach(function() {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método POST em /chocolates para criar um novo chocolate', function(){
    it('Criar um chocolate Trybe', async function() {
      // TRIPLE AAA
      // arrange - arranjar / arrumar
      const expectedStatus = 201;
      const expectedResponse = {
        id: 5,
        name: 'Trybe Chocolate',
        brandId: 1
      };
      const requestBody = {
        name: 'Trybe Chocolate',
        brandId: 1
      }
      // act - agir / atuar
      const response = await chai
        .request(app)
        .post('/chocolates')
        .send(requestBody);

      // assert - aferir / afirmar
      expect(response.status).to.be.equal(expectedStatus); // 1 === 1
      expect(response.body).to.be.deep.equal(expectedResponse);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade total de chocolates', async function () {
      const response = await chai.request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});

describe('Usando o método GET em /chocolates/search', function () {
  it('Retorna os chocolates que contém "Mo" no nome', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ]);
  });

  it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=ZZZ');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal([]);
  });
});

describe('Usando o método PUT em /chocolates/:id', function () {
  it('Atualiza um chocolate existente', async function () {
    const response = await chai
      .request(app)
      .put('/chocolates/1').send({
      name: 'Mint Pretty Good',
      brandId: 2,
    });

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal({
      id: 1,
      name: 'Mint Pretty Good',
      brandId: 2,
    });
  });
    
  it('Se o chocolate não existe, gera um erro', async function () {
    const response = await chai
      .request(app)
      .put('/chocolates/555').send({
      name: 'Mint Pretty Good',
      brandId: 2,
      });
    
    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({
      message: 'chocolate not found',
    });
  });
});

});