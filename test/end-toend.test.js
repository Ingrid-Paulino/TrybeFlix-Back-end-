//Add Teste de integração - Testa toda a aplicação de uma so vez
const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

//esse app não sobe a aplicação
const app = require('../app');

const connection = require('../models/connection');
const subscribersMock = require('./mocks/subscribersMock');

chai.use(chaiHttp);

describe('API', () => {
    describe('GET /subscribers', () => {
        describe('Quando não existem dados na tabela subscribers', () => {
            before(() => {
                sinon.stub(connection, 'execute').resolves([subscribersMock.empty])
            })

            after(() => {
                connection.execute.restore();
            })

            it('Deve responder com o status 200', async() => { 
                const response = await chai.request(app).get('/subscribers');

                expect(response.status).to.be.eq(200);
             });

             it('Deve responder com um array vazio no body', async() => { 
                const response = await chai.request(app).get('/subscribers');

                // Para retorno usamos response.body e não response.json, pois o body que guarda o retorno da função
                expect(response.body).to.be.deep.eq(subscribersMock.empty);
             });
        })

        describe('Quando existem dados na tabela subscribers', () => {
            before(() => {
                sinon.stub(connection, 'execute').resolves([subscribersMock.full])
            })

            after(() => {
                connection.execute.restore();
            })

            it('Deve responder com o status 200', async() => { 
                const response = await chai.request(app).get('/subscribers');

                expect(response.status).to.be.eq(200);
             });

             it('Deve responder com os elementos esperados no body', async() => { 
                const response = await chai.request(app).get('/subscribers');

                // Para retorno usamos response.body e não response.json, pois o body que guarda o retorno da função
                expect(response.body).to.be.deep.eq(subscribersMock.full);
             });
        })
    })
})