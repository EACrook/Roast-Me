const dotenv = require('dotenv').config();
const express = require('express');
const routes = require('./controllers');
const exphbs  = require('express-handlebars');
const hbs = exphbs.create({});
const connection = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

// configure handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// access public directory
app.use(express.static('public'));

app.use(routes);

connection.sync({}).then(() => {
    console.log("db synced")
    // only listens if db is synced correctly
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`)
    });
})

