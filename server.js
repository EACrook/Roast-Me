const express = require('express');
const routes = require('./routes');
var exphbs  = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// configure handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
});
