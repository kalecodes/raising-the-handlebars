const router = require("express").Router();
const { Event, EventTags, Tag, User } = require("../models");

// get limited amount of events (no auth require)
router.get("/", (req, res) => {
  Event.findAll({
    where: {
      id: [1, 2, 3],
    },
    attributes: ["id", "name", "location", "description", "date"],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
      {
        model: Tag,
        attributes: ["id", "tag_title"],
        through: EventTags,
        as: "tags",
      },
    ],
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No events found" });
      }
      // res.json(dbEventData);
      const events = dbEventData.map((event) => event.get({ plain: true }));
      res.render("homepage", {
        events,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// render sign-up page when link is clicked
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("sign-up");
});



router.get("/add-event", (req, res) => {
  Tag.findAll({

  })
  .then((dbTagData) => {
    if (req.session.loggedIn) {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tags found'})
      }
      const tags = dbTagData.map(tag => tag.get({ plain: true }));
      res.render("add-event", {
        tags,
        loggedIn: req.session.loggedIn
      });
      return;
    }
    res.redirect("/login");
  })

});

module.exports = router;
