const { Tag } = require('../models');

const tagData = [
    {
        tag_title: 'Outdoor Event'
    },
    {
        tag_title: 'Indoor Event'
    },
    {
        tag_title: 'Masks Required'
    },
    {
        tag_title: 'No Masks Required'
    },
    {
        tag_title: 'Social Distancing Required'
    },
    {
        tag_title: 'Social Distancing Encouraged'
    },
    {
        tag_title: 'Social Distancing Not Required'
    },
    {
        tag_title: 'Proof of Vaccine Required'
    },
    {
        tag_title: 'No Vaccine Requirement'
    }
]

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;