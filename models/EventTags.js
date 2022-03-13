const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EventTags extends Model {}

EventTags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        }
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true, 
        modelName: 'eventtags'
    }
)

module.exports = EventTags;