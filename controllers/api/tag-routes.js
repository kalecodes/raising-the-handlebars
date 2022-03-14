const router = require('express').Router();
const { Tag, Event, EventTags, User } = require('../../models');

router.get('/:id', (req, res) => {
    Tag.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'tag_title'
        ],
        include: [
            {
                model: Event, 
                attributes: [
                    'name',
                    'location',
                    'description',
                    'date'
                ],
                include: [
                    {
                        model: User,
                        attributes: [
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
                ],
                through: EventTags,
                as: 'tags'
            }
        ]
    })
    .then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: 'No tags found'})
        }
        // res.json(dbTagData)
        const events = dbTagData.tags.map(tag => tag.get({ plain: true }));
        console.log(events)
        res.render('dashboard', {
            events,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});


module.exports = router;
