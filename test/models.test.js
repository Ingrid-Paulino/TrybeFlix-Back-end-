const { expect } = require("chai");

const sinon = require('sinon');

const subscribersMock = require('./mocks/subscribersMock')
const SubscriberModel = require('../models/SubscriberModel');
const connection = require('../models/connection')

describe('Models', () => {
    describe('SubscriberModel', () => {
        describe('#getAll', () => {
            describe('Quando a tabela `subscribers` não tiver dados!', () => {
                //Para esses mocks serem reutilizaveis, irrei passa-los para a pasta mock
                // const subscribersMock = [];

                before(() => {
                    // Formato : [ [{ id: 1, name: 'xyz', email: xyz@gmail.com }] ]
                    // sinon.stub(connection, 'execute').resolves([subscribersMock])

                    sinon.stub(connection, 'execute').resolves([subscribersMock.empty])
                })

                after(() => {
                    connection.execute.restore();
                })

                it('retorna um array vazio', async () => {
                    const subscribers = await SubscriberModel.getAll();

                    //pra fazer comparaçoes use o deep
                    // expect(subscribers).to.be.deep.eq(subscribersMock)
                    expect(subscribers).to.be.deep.eq(subscribersMock.empty)

                })
            })

            describe('Quando a tabela `subscribers` tiver dados!', () => {
                //Para esses mocks serem reutilizaveis, irrei passa-los para a pasta mock
                // const subscribersMock = [
                //     {id:1, name: 'Patrick', email: 'patrick@gmail.com'}
                // ];

            
                before(() => {
                    // sinon.stub(connection, 'execute').resolves([subscribersMock])
                    sinon.stub(connection, 'execute').resolves([subscribersMock.full])

                })

                after(() => {
                    connection.execute.restore();
                })

                it('Deve retornar os elementos esperados', async () => {
                    const subscribers = await SubscriberModel.getAll();
                    // expect(subscribers).to.be.deep.equal(subscribersMock)

                    expect(subscribers).to.be.deep.equal(subscribersMock.full)
                })
            })
        })
    })
 })