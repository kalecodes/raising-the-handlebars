const { Event } = require('../models');

const eventData = [
    {
        name: 'Doggy Play Date',
        location: 'Bird Park',
        date: 'March 19, 2021 @ 1:00 PM',
        user_id: '1'
    },
    {
        name: 'Young Artist Exhibit',
        location: 'Shockoe Bottom Art Hall',
        date: 'March 20th 2021 5-7pm',
        user_id: '2'
    },
    {
        name: 'Spring Drag Brunch',
        location: 'The Camel',
        date: 'Sunday, March 20th 2021 @ 12 PM',
        user_id: '3'
    },
    {
        name: 'Community Book Club',
        location: 'Barnes & Noble',
        date: '3/23/2021 6:00PM',
        user_id: '4'
    },
    {
        name: 'Community Prayer Group',
        location: 'The Fan Interfaith Church',
        date: 'Thursday 3/24 5-6PM',
        user_id: '4'
    },
    {
        name: 'Morning Meditation by the River',
        location: 'Browns Island',
        date: 'Saturday, March 26th at 9am',
        user_id: '2'
    },
    {
        name: 'Spring Gun Show',
        location: 'Richmond International Raceway',
        date: '3/27/2021 @ 12PM',
        user_id: '1'
    }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;