const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedEvents = require('./eventData');
const seedTags = require('./tagData')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedEvents();

    await seedTags();

    process.exit(0);
};

seedAll();