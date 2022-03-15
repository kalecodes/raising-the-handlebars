// Import models
const User = require("./User");
const Event = require("./Event");
// const Comment = require("./Comment");
const Tag = require("./Tag");
const EventTags = require("./EventTags")

// Create associations
User.hasMany(Event, {
  foreignKey: "user_id",
});

Event.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Event, {
//   foreignKey: "event_id",
//   onDelete: "SET NULL",
// });

// Event.hasMany(Comment, {
//   foreignKey: "event_id",
// });


Tag.belongsToMany(Event, {
  through: EventTags,
  as: 'tags',
  foreignKey: 'tag_id',
  onDelete: 'SET NULL'
})

Event.belongsToMany(Tag, {
  through: EventTags,
  as: 'tags',
  foreignKey: 'event_id',
  onDelete: 'SET NULL'
})


module.exports = {
  User,
  Event,
  Tag,
  EventTags
  //  Comment
};