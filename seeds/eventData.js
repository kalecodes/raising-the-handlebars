const { Event } = require('../models');

const eventData = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;