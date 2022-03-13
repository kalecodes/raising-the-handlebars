const { EventTags } = require('../models');

const eventTagsData = [
    {
        event_id: 1,
        tag_id: 1
    },
    {
        event_id: 1,
        tag_id: 4
    },
    {
        event_id: 1,
        tag_id: 6
    },
    {
        event_id: 2,
        tag_id: 2
    },
    {
        event_id: 2,
        tag_id: 3
    },
    {
        event_id: 2,
        tag_id: 5
    },
    {
        event_id: 3,
        tag_id: 2
    },
    {
        event_id: 3,
        tag_id: 8
    },
    {
        event_id: 3,
        tag_id: 6
    },
    {
        event_id: 4,
        tag_id: 2
    },
    {
        event_id: 4,
        tag_id: 3
    },
    {
        event_id: 4,
        tag_id: 5
    },
    {
        event_id: 5,
        tag_id: 2
    },
    {
        event_id: 5,
        tag_id: 4
    },
    {
        event_id: 5,
        tag_id: 5
    },
    {
        event_id: 6,
        tag_id: 1
    },
    {
        event_id: 6,
        tag_id: 4
    },
    {
        event_id: 6,
        tag_id: 6
    },
    {
        event_id: 6,
        tag_id: 9
    },
    {
        event_id: 7,
        tag_id: 2
    },
    {
        event_id: 7,
        tag_id: 4
    },
    {
        event_id: 7,
        tag_id: 7
    },
    {
        event_id: 7,
        tag_id: 9
    }
]

const seedEventTags = () => EventTags.bulkCreate(eventTagsData);

module.exports = seedEventTags;