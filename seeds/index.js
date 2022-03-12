const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedEvents = require('./eventData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedEvents();

    process.exit(0);
};

seedAll();