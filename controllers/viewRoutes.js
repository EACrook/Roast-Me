const router = require("express").Router();

const {
	Drink,
	Ingredient,
	DrinkIngredient,
	Insult,
	Post,
	User,
} = require("../models");
const { sequelize, findAll } = require("../models");
const apiRoutes = require("../controllers");

router.get("/", (req, res) => {
	let data = {
		posts: "",
		username: "",
		homeHeader: "home-header",
		homeRoastMe: "home-roast-me",
	};
	Post.findAll({
		attributes: ["id", "comment", "photo_url"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbHomeData) => {
			const posts = dbHomeData.map((post) =>
				post.get({
					plain: true,
				})
			);
			data.posts = posts;
			res.render("home", data);
		})
		.catch((err) => {
			console.log("err", err);
			res.status(500).json(err);
		});
});

router.get("/blackboard", (req, res) => {
	let data = {
		drinks: "",
		ingredients: "",
		blackboardBody: "blackboard",
	};
	// Pull all drinks to display
	Drink.findAll({
		attributes: ["id", "drink_name", "temp", "ingredient_id"],
		include: [
			{
				model: Ingredient,
				attributes: ["ingredient_name"],
			},
		],
	})
		.then((dbDrinkData) => {
			const drinks = dbDrinkData.map((drink) =>
				drink.get({
					plain: true,
				})
			);
			data.drinks = drinks;

			Ingredient.findAll({
				attributes: ["id", "ingredient_name"],
			}).then((dbIngredientData) => {
				const ingredients = dbIngredientData.map((ingredient) =>
					ingredient.get({
						plain: true,
					})
				);
				data.ingredients = ingredients;

				Insult.findAll({
					attributes: ["id", "insult"],
				}).then((dbInsultData) => {
					const insults = dbInsultData.map((insults) =>
						insults.get({
							plain: true,
						})
					);
					let insultLength = insults.length;

					let idx = Math.floor(Math.random() * insultLength);

					data.insults = insults[idx];

					res.render("blackboard", data);
				});
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/edit-caption", (req, res) => {
	// action: get ingredients with sequelize then pass into view {ingredients}
	Post.findAll({
		attributes: ["id", "comment", "photo_url"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostdata) => {
			console.log("abut to send page!!!", dbPostdata);
			res.render("edit-caption", {
				pageHeader: "page-header",
				pageRoastMe: "page-roast-me",
			});
		})
		.catch((err) => {
			console.log("err", err);
			res.status(500).json(err);
		});
});

router.get("/login", (req, res) => {
	res.render("login", {
		pageHeader: "page-header",
		pageRoastMe: "page-roast-me",
	});
});

module.exports = router;
