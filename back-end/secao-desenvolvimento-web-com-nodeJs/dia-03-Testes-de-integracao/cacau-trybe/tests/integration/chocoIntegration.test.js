const chai = require('chai');
const app = require('../../src/app');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

chai.use(chaiHttp);

const { expect } = chai;

const total = {
  brands: [
      {
          id: 1,
          name: 'Lindt & Sprungli'
      },
      {
          id: 2,
          name: 'Ferrero'
      },
      {
          id: 3,
          name: 'Ghirardelli'
      }
  ],
  chocolates: [
      {
          id: 1,
          name: 'Mint Intense',
          brandId: 1
      },
      {
          id: 2,
          name: 'White Coconut',
          brandId: 1
      },
      {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2
      },
      {
          id: 4,
          name: 'Mounds',
          brandId: 3
      }
  ]
}

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(total));
    sinon.stub(fs.promises, 'writeFile').resolves(total);
  });

  afterEach(sinon.restore);

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna o total de chocolates!', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
  });

  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates com o nome pesquisado!', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      const expected = [
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
      ];

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(expected);
    });

    it('Procura com um valor que não existe e retorna um array vazio', async function () {
      const response = await chai
      .request(app)
      .get('/chocolates/search?name=ADFSADFDFDSF');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal([]);
    }); 
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate existente', async function () {
      const toSend = {
        name: 'Mint Pretty Good',
        brandId: 2,
      };
      const response = await chai
        .request(app)
        .put('/chocolates/1')
        .send(toSend)

      expect(response.status).to.be.equal(200);
      // expect(response.body.chocolate).to.deep.equal({
      //   id: 1,
      //   name: 'Mint Pretty Good',
      //   brandId: 2,
      // });
    });
      
    it('Se o chocolate não existe, gera um erro', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/555')
        .send({
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