const path = require('path')
const express = require('express');
// const session =  require('express-session');
const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    // fill in later once in use
    // will also need ot require SequelizeStore
}

// app.use(session(sess));

// use handlebars
const hbs = exphbs.create({ helpers })

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Public')));

app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});