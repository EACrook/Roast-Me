require('dotenv').config();
const express = require('express');
const routes = require('./controllers');
const exphbs  = require('express-handlebars');
const hbs = exphbs.create({});
// const cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});
const connection = require('./config/connection.js');
//added 'path' (F)
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// configure handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// access public directory--FW- changed to path.join style to link login/logout and others
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
// app.use(cl);

connection.sync({}).then(() => {
    console.log("db synced")
    // only listens if db is synced correctly
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`)
    });
})

