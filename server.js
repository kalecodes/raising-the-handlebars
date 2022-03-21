const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

process.env.SESS_SECRET = 'secret secret secret';

const sess = {
  secret: process.env.SESS_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require("./utils/helpers");

// use handlebars
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
