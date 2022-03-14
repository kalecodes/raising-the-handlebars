const router = require('express').Router();
const { Event, User, Tag, EventTags } = require('../../models');

// Create a new event 
router.post('/', (req, res) => {
    Event.create({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        data: req.body.date,
        user_id: req.session.user_id
        // tags: 
    })
    .then(dbEventData => {
        res.json(dbEventData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

// get all events
// see dashboard-routes.js 
    //might need to relocate to this file



//get a event by id
router.get('/:id', (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'location',
            'description',
            'date'
        ],
        include: [
            {
                model: User, 
                attributes: [
                    'id',
                    'username'
                ]
            },
            {
                model: Tag, 
                attributes: [
                    'id',
                    'tag_title'
                ],
                through: EventTags,
                as: 'tags'
            }
        ]
    })
    .then(dbEventData => {
        if (!dbEventData) {
            res.status(404).json({ message: 'No events found'})
        }
        const event = dbEventData.map(event => event.get({ plain: true }))
        res.render('dashboard', {
            event, 
            loggedIn: req.session.logginIn
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})




module.exports = router;