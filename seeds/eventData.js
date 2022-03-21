const { Event } = require('../models');

const eventData = [
    {
        name: 'Doggy Play Date',
        location: 'Bird Park',
        description: 'Bring your pups for a fun afternoon of fun in the sun. We will be meeting a the Bird Park dog park around 1:00PM. This is an outdoor event, so no masks required. Social Distancing is encouraged but not required.',
        date: '2022-03-19 13:00:00',
        user_id: '1'
    },
    {
        name: 'Young Artist Exhibit',
        location: 'Shockoe Bottom Art Hall',
        description: 'Come support up and coming richmond artists as they debut their most recent collections. This is a free event. This is an indoor event, masks are required and social distancing should be practiced at all times during the event.',
        date: '2022-04-20 17:00:00',
        user_id: '2'
    },
    {
        name: 'Spring Drag Brunch',
        location: 'The Camel',
        description: 'Come welcome spring with the best drag queens and kings in RVA. Doors open at 11:30, show starts at 12. Please be prepared to show your vaccine cards upon entrance. Masks will be required for unvaccinated guests. Social distancing is encouraged.',
        date: '2022-03-20 12:00:00',
        user_id: '3'
    },
    {
        name: 'Community Book Club',
        location: 'Barnes & Noble',
        description: 'A new series of our book club meetings will be starting up again this month. Thisclub consists of 12 meetings over 6 months, reading a new book and meeting to discuss bi-weekly. Please see our blog site for the reading list.',
        date: '2022-03-23 18:00:00',
        user_id: '4'
    },
    {
        name: 'Community Prayer Group',
        location: 'The Fan Interfaith Church',
        description: 'We welcome the Richmond community to join us in positive prayer on Thursday afternoons at the Fan Interfaith Church. All are welcome. No masks or vaccine cards are required to attend. Social distancing will be required when possible. ',
        date: '2022-03-24 17:00:00',
        user_id: '4'
    },
    {
        name: 'Morning Meditation by the River',
        location: 'Browns Island',
        description: 'Come relax and unwind with us at Browns Island for a free meditaiton session from 9-10am, followed by yoga from 10-10:30. This is an outdoor event, but social distancing will be required. We encourage tipping the instructors if you enjoy their services.',
        date: '2022-03-26 09:00:00',
        user_id: '2'
    },
    {
        name: 'Spring Gun Show',
        location: 'Richmond International Raceway',
        description: 'SPRING GUN SHOW AT RICHMOND INTERNATIONAL RACEWAY ON SUNDAY MARCH 27TH 12-5PM. NO MASKS REQUIRED. NO VACCINE REQUIREMENTS. PLEASE STAY HOME IF YOU FEEL UNWELL. SOCIAL DISTANCING ENCOURAGED WHEN POSSIBLE. THIS IS A FREE EVENT TO ATTEND.',
        date: '2022-03-27 12:00:00',
        user_id: '1'
    }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;