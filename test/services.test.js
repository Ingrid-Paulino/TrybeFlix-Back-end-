const { expect } = require("chai");

const sinon = require('sinon');

const subscribersMock = require('./mocks/subscribersMock')
const SubscriberService = require('../services/SubscriberService');
const SubscriberModel = require('../models/SubscriberModel');


describe('Services', () => {
    describe('SubscriberService', () => {
        describe('#getAll', () => {
            describe('Quando a tabela `subscribers` não tiver dados!', () => {
                before(() => {
                    sinon.stub(SubscriberModel, 'getAll').resolves(subscribersMock.empty)
                })

                after(() => {
                    SubscriberModel.getAll.restore();
                })

                it('retorna um array vazio', async () => {
                    const subscribers = await SubscriberService.getAll();
                    expect(subscribers).to.deep.eq(subscribersMock.empty)
                })
            })
               

                describe('Quando a tabela `subscribers` tiver dados!', () => {
                    before(() => {
                        sinon.stub(SubscriberModel, 'getAll').resolves(subscribersMock.full)
                    })
    
                    after(() => {
                        SubscriberModel.getAll.restore();
                    })

                    it('retorna os elementos esperados', async () => {
                        const subscribers = await SubscriberService.getAll();
                        expect(subscribers).to.deep.eq(subscribersMock.full)
                    })
                })
            })
        })
    })