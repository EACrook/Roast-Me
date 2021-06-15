require('dotenv').config();
const express = require('express');
const routes = require('./controllers');
const exphbs  = require('express-handlebars');
const hbs = exphbs.create({});
const connection = require('./config/connection.js');
//added 'path' (F)
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const { User, Post } = require('./models')

// configure handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// access public directory--FW- changed to path.join style to link login/logout and others
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

connection.sync({ force: false }).then(() => {
    console.log("db synced")
    console.log('USER MODEL!!', User)

    // User.create({username: 'Katie', email: 'katie@katie.com', password: '123456789'})
    //Post.create({comment: 'Tasty!', photo_url: 'www.google.com', user_id: 1})
    // only listens if db is synced correctly
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`)
    });
})

