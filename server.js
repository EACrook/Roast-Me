require("dotenv").config();
const express = require("express");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const connection = require("./config/connection.js");
//added 'path' (F)
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const { User, Post } = require("./models");

const session = require("express-session");
const { sequelize } = require("./models/Drink");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
	secret: "super secret secret",
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};
app.use(session(sess));
// configure handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// access public directory--FW- changed to path.join style to link login/logout and others
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

connection.sync({ force: false }).then(() => {
	console.log("db synced");

	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}!`);
	});
});
