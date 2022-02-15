const SubscriberModel = require("../models/SubscriberModel")

const getAll = async () => {
    const subscribers = await SubscriberModel.getAll();
    // console.log(subscribers);
    return subscribers;
}

module.exports = {
    getAll,
}