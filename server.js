const express = require('express');
const routes = require('./routes');
var exphbs  = require('express-handlebars');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3451;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

});



