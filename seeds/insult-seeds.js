const {
    Insult
} = require('../models');

const InsultsData = [{
    insult: 'If I throw a stick, will you leave?'
}, {
    insult: 'You are a gray sprinkle on a rainbow cupcake.'
}, {
    insult: 'You are more disappointing than an unsalted pretzel.'
}, {
    insult: 'Light travels faster than sound, which is why you seemed bright until you spoke.'
}, {
    insult: 'Hold still. I’m trying to imagine you with a personality.'
}, {
    insult: 'Your face makes onions cry.'
}, {
    insult: 'It is impossible to underestimate you.'
}, {
    insult: 'I am not insulting you; I’m describing you.'
}, {
    insult: 'Do not be ashamed of who you are. That is your parents job.'
}, {
    insult: 'I thought of you today. It reminded me to take out the trash.'
}, {
    insult: 'Is your ass jealous of the amount of shit that comes out of your mouth?'
}, {
    insult: 'You have miles to go before you reach mediocre.'
}, {
    insult: 'Someday you’ll go far… and I really hope you stay there.'
}, {
    insult: 'Somewhere out there is a tree tirelessly producing oxygen for you. You owe it an apology.'
}, {
    insult: 'Life is full of disappointments, and I just added you to the list.'
}, {
    insult: 'I"d love to insult you, but nature already did the job.'
}, {
    insult: 'Life is good, you should get one.'
},{
    insult: 'You"re like Mondays, nobody likes you.'
}
]

const seedInsults = () => Insult.bulkCreate(InsultsData)

module.exports = seedInsults;