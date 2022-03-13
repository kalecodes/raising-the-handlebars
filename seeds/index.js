const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedEvents = require('./eventData');
const seedTags = require('./tagData');
const seedEventTags = require('./eventTagsData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedTags();

    await seedEvents();

    await seedEventTags();

    process.exit(0);
};

seedAll();