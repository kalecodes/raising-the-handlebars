const { Event } = require('../models');

const eventData = [
    {
        name: 'Doggy Play Date',
        location: 'Bird Park',
        desccription: 'Bring your pups for a fun afternoon of fun in the sun. We will be meeting a the Bird Park dog park around 1:00PM. This is an outdoor event, so no masks required. Social Distancing is encouraged but not required.',
        date: 'March 19, 2021 @ 1:00 PM',
        user_id: '1'
    },
    {
        name: 'Young Artist Exhibit',
        location: 'Shockoe Bottom Art Hall',
        desccription: 'Come support up and coming richmond artists as they debut their most recent collections. This is a free event. Alcoholic Beverages will be available for purchase for attendees age 21+. This is an indoor event, masks are required and social distancing should be practiced at all times during the event.',
        date: 'March 20th 2021 5-7pm',
        user_id: '2'
    },
    {
        name: 'Spring Drag Brunch',
        location: 'The Camel',
        desccription: 'Come welcome spring with the best drag queens and kings in RVA. Doors open at 11:30, show starts at 12. There is a $5 cover to enter the show. Masks are not required for vaccinated individuals, please be prepared to show your vaccine cards upon entrance. Masks will be required for unvaccinated guests. Socail distancing is encouraged when possible, but not required.',
        date: 'Sunday, March 20th 2021 @ 12 PM',
        user_id: '3'
    },
    {
        name: 'Community Book Club',
        location: 'Barnes & Noble',
        desccription: 'A new series of our popular community book club meetings will be starting up again this month. This book club consists of a series of 12 meetings over the next 6 months. We will be reading a new book and meeting to discuss it bi-weekly. Please see our blog site for the reading list. This is a free community event to participate in. Books will not be provided by the group, all individuals are responsible for obtianing their own copies to read. This is an indoor event, masks and social distancing will be required. ',
        date: '3/23/2021 6:00PM',
        user_id: '4'
    },
    {
        name: 'Community Prayer Group',
        location: 'The Fan Interfaith Church',
        desccription: 'We welcome the Richmond community to join us in positive prayer on Thursday afternoons at the Fan Interfaith Church. All are welcome. This is an indoor event. No masks or vaccine cards are required to attend. Social distancing will be required when possible. ',
        date: 'Thursday 3/24 5-6PM',
        user_id: '4'
    },
    {
        name: 'Morning Meditation by the River',
        location: 'Browns Island',
        desccription: 'Come relax and unwind with us at Browns Island on Saturday mornings. We will host a free quided meditaiton session from 9-10am, followed by yoga from 10-10:30. This is an outdoor event, no masks or vaccine cards are required to attend. Social distancing will be required. This is a recurring free event. No fee is required to enter, but we encourage providing a tip to the volunteer instructors if you enjoy their services.',
        date: 'Saturday, March 26th at 9am',
        user_id: '2'
    },
    {
        name: 'Spring Gun Show',
        location: 'Richmond International Raceway',
        desccription: 'SPRING GUN SHOW AT RICHMOND INTERNATIONAL RACEWAY ON SUNDAY MARCH 27TH 12-5PM. NO MASKS REQUIRED. NO VACCINE REQUIREMENTS. PLEASE STAY HOME IF YOU FEEL UNWELL. SOCIAL DISTANCING ENCOURAGED WHEN POSSIBLE. THIS IS A FREE EVENT TO ATTEND.',
        date: '3/27/2021 @ 12PM',
        user_id: '1'
    }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;