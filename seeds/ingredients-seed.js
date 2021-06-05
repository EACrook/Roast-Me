const { Ingredient } = require('../models')

const ingredientsData = [{
        ingredient_name: 'Light Roast',
    },
    {
        ingredient_name: 'Medium Roast',
    },
    {
        ingredient_name: 'Dark Roast',
    },
    {
        ingredient_name: 'Decaf'
    }, 
    {
        ingredient_name: 'Espresso'
    },
    {
        ingredient_name: '2% Milk',
    },
    {
        ingredient_name: 'Whole Milk',
    },
    {
        ingredient_name: '1% Milk',
    },
    {
        ingredient_name: 'Half & Half',
    },
    {
        ingredient_name: 'Heavy Whipping Cream',
    },
    {
        ingredient_name: 'Oat Milk'
    },
    {
        ingredient_name: 'Almond Milk'
    },
    {
        ingredient_name: 'Soy Milk'
    },
    {
        ingredient_name: 'Steamed 2% Milk',
    },
    {
        ingredient_name: 'Steamed Whole Milk',
    },
    {
        ingredient_name: 'Steamed 1% Milk',
    },
    {
        ingredient_name: 'Steamed Half & Half',
    },
    {
        ingredient_name: 'Steamed Heavy Whipping Cream',
    },
    {
        ingredient_name: 'Steamed Oat Milk'
    },
    {
        ingredient_name: 'Steamed Almond Milk'
    },
    {
        ingredient_name: 'Steamed Soy Milk'
    },
    {
        ingredient_name: 'Sugar',
    },
    {
        ingredient_name: 'Raw Cane Sugar',
    },
    {
        ingredient_name: 'Brown Sugar',
    },
    {
        ingredient_name: 'Stevia',
    },
    {
        ingredient_name: 'Honey',
    },
    {
        ingredient_name: 'Mocha/chocolate',
    },
    {
        ingredient_name: 'Hazelnut',
    },
    {
        ingredient_name: 'Vanilla',
    },
    {
        ingredient_name: 'Liquid Sugar',
    },
    {
        ingredient_name: 'Peppermint'
    },
    {
        ingredient_name: 'White Mocha'
    },
    {
        ingredient_name: 'Toffee'
    },
    {
        ingredient_name: 'Green Tea',
    },
    {
        ingredient_name: 'Black Tea',
    }, 
    {
        ingredient_name: 'Herbal Tea',
    }, 
    {
        ingredient_name: 'Oolong Tea',
    }, 
    {
        ingredient_name: 'Rooibos Tea'
    }, 
    {
        ingredient_name: 'White Tea'
    }
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientsData)

module.exports = seedIngredients;