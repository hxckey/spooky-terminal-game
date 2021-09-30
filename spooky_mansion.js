// ---------------------------------------------------------
// Run 'node index.js' to start looking after your cactus!
// ---------------------------------------------------------
const readline = require('readline')
const ui = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class PLANTError extends Error {
    constructor(msg){
        super(`\nYOU\'RE CACTUS HAS DIED! ${msg}`);
        this.name = 'CACTUSError';
    };
    shout(){
        console.clear()
        console.log(`You\'ve received a ${this.name}!`.toUpperCase());
    }
};

const cacti = [{name: "Colin", spikes: "yes"}];

class CactusCareSimulator {

    run(){
        console.clear()
        this.firstQuestion();
    }

    firstQuestion(){
        ui.question('\nWelcome to the Cactus Care Simulator. We\'re glad you\'ve decided to adopt a cactus! What is the name of the cactus you\'d like?\n', input => {
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
                this.showCactusGraphic();
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

    showCactusGraphic(){
        console.log("        #%:.     \n#%=   ###%=:      \n##%=   |##%::       \n##%=   ###%=:       \n#%%=  |##%=:       \n##%== ###%=:    ===    \n##%%=!##%=:    ===    \n###%%##%=   :====   \n######%=: .:====     \n####%%=======       \n###%%%===:    \n|%#%%=:=:  \n####%=:    \n|##%%:    \n-------####%:---=\n|%#%%: ");
    }

}

module.exports = { CactusCareSimulator }
