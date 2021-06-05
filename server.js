const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// configure handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// route to home page
app.get('/', function (req, res) {
    console.log("err", err)
    res.render('home')
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
});
