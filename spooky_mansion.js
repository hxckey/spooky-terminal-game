// ---------------------------------------------------------
// Run 'node index.js' to start playing!
// ---------------------------------------------------------
    
//return to this codeline later and lookup how to use inquirer npm
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const questions = [
    {
        name: "CharacterCreation",
        message: "Would you like to play as the default, or create your own character?",
        type: "list",
        choices: ["Select default", new inquirer.Separator(), "Create my own"]
    },
    {
        name: "Upstairs",
        message: "Which way do you run?",
        type: "list",
        choices: ["up the stairs", "down the hall", "into the basement"]
    }
]

const players = [
    {name: "X", gun: "", ammo: 10, health: 5 },
    {name: "", gun: "", ammo: 10, health: 5 }
];

prompt(questions)
.then(function(answer){
    console.log(answer.CharacterCreation);
    console.log(answer.Upstairs);
});
