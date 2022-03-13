const router = require('express').Router();

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const tagRoutes = require('./tag-routes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/tags', tagRoutes);

module.exports = router;