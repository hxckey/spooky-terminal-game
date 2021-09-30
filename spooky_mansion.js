// ---------------------------------------------------------
// Run 'node index.js' to start playing!
// ---------------------------------------------------------
const readline = require('readline');

//return to this codeline later and lookup how to use inquirer npm
const inquirer = require('inquirer');

const ui = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class GameOver extends Error {
    constructor(msg){
        super(`\nYou are dead... ${msg}`);
        this.name = 'GameOver';
    };
    shout(){
        console.clear()
        console.log(`You have died...`.toUpperCase());
    }
};

const player = [{name: "Person X", ammo: 10, health: 5, }];

class ZombieCastle {

    run(){
        console.clear()
        this.entranceHall();
    }

    entranceHall(){
        ui.question('\n... you wake up in a dark entrance hall... you appear to be in some kind of mansion... what do you do?', input => {
            try {
                this.user = cacti.find(u => u.name.toLowerCase() === input.toLowerCase());
                if(!this.user){throw new Error(`Sorry! We don\'t have a cactus with that name :(`);}
                this.nextQuestion()
            } catch (err) {
                this.errorAndClose(err)
            };
        })
    }

    nextQuestion(){
        console.log(`\nHere\'s ${cacti.name}!`);
        ui.question('Do you like cacti with spikes?\n', input => {
            if(input === this.user.spikes){
                console.log('Excellent, he\'s all yours...');
            } else {
                err.shout()
                this.errorAndClose(err)
            };
        })
    };

    errorAndClose(err){
        console.log('\n', err.message, '\n');
        ui.close();
    }

}

module.exports = { ZombieCastle }
