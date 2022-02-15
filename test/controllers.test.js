// A camada de controllers testa os middwers
const { expect, assert } = require("chai");

const sinon = require('sinon');

const subscribersMock = require('./mocks/subscribersMock')
const SubscriberController = require('../controllers/SubscribersController');
const SubscriberService = require('../services/SubscriberService');


describe('Controllers', () => {
    describe('SubscriberController', () => {
        describe('#getAll', () => {
            describe('Quando a tabela `subscribers` não tiver dados!', () => {
                const req = {};
                const res = {};

                before(() => {
                    // Lê: meu res vai ter um atributo chamado status, que é uma função.
                    // O sinon.stub retorna nesse caso uma função mocada
                    res.status = sinon.stub().returns(res);
                    res.json = sinon.stub();

                    sinon.stub(SubscriberService, 'getAll').resolves(subscribersMock.empty);
                })

                after(() => {
                    SubscriberService.getAll.restore();
                })

                it('Deve chamar a função `res.status` com valor 200', async () => {
                    await SubscriberController.getAll(req,res);
                    // confere se o res.status foi chamado
                    // assert(res.status.called)
                    // assert(res.status.called).to.be.true;
                    expect(res.status.calledWith(200)).to.be.true;

                })

                it('Deve chamar a função `res.json` com array vazio', async () => {
                    await SubscriberController.getAll(req,res);
                    // confere se o res.json foi chamado
                    //poderia usar o expect tbm
                    expect(res.json.calledWith(subscribersMock.empty)).to.be.true;

                })
            })

            describe('Quando a tabela `subscribers` tiver dados!', () => {
                const req = {};
                const res = {};

                before(() => {
                    res.status = sinon.stub().returns(res);
                    res.json = sinon.stub();

                    sinon.stub(SubscriberService, 'getAll').resolves(subscribersMock.full);
                })

                after(() => {
                    SubscriberService.getAll.restore();
                })

                it('Deve chamar a função `res.status` com valor 200', async () => {
                    await SubscriberController.getAll(req,res);
                    expect(res.status.calledWith(200)).to.be.true;

                })

                it('Deve chamar a função `res.json` com os elemento esperados', async () => {
                    await SubscriberController.getAll(req,res);
                    expect(res.json.calledWith(subscribersMock.full)).to.be.true;
                })
            })


        })
    })
});
