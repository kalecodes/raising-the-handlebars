// Import models
const User = require("./User");
const Event = require("./Event");
const Comment = require("./Comment");
const Tag = require("./Tag");

// Create associations
User.hasMany(Event, {
  foreignKey: "user_id",
});

Event.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Event, {
  foreignKey: "event_id",
  onDelete: "SET NULL",
});

Event.hasMany(Comment, {
  foreignKey: "event_id",
});

Tag.belongsTo(Event, {
  foreignKey: "tag_id",
  onDelete: "SET NULL"
})

Event.hasMany(Tag, {
  foreignKey: "tag_id"
})

module.exports = { User, Event, Comment };
