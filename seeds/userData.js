const { User } = require('../models');
const bcrypt = require('bcrypt');


const userData = [
    {
        username: 'teddy123',
        email: 'tedsmith@yahoo.com',
        password: 'password123'
    },
    {
        username: 'coolguy456',
        email: 'samwest@gmail.com',
        password: 'password456'
    },
    {
        username: 'tallgirl789',
        email: 'beckywhite@icloud.com',
        password: 'password789'
    },
    {
        username: 'fatalbert11',
        email: 'fatalbert11@gmail.com',
        password: 'password11'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;