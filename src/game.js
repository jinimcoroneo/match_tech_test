const readline = require("readline")
const Player = require("./player")

class Game {
    constructor() {
        this.gameDeck = []
        this.playedCards = []
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("How many packs of cards would you like to use? ", _numDecks => {
            const numDecks = parseInt(_numDecks)
            if (!Number.isInteger(numDecks)) {
                console.log("You must enter an integer, please try again")
                return rl.close()
            }

            rl.question(`Match on: a) face value, b) suit${numDecks === 1 ? ' ' : ', c) both '}`, response => {
                if (!['a', 'b', 'c'].includes(response)) {
                    console.log("You must choose a, b, or c, please try again")
                    return rl.close()
                }
                rl.question("Enter player 1 name: ", playerOne => {
                    rl.question("Enter player 2 name: ", playerTwo => {
                        this.decks = numDecks
                        this.matchingCondition = response
                        this.playerOne = new Player(playerOne)
                        this.playerTwo = new Player(playerTwo)
                        rl.close()
                    })
                })
            })
        })
        rl.on("close", function () {
            process.exit(0);
        });
    }
}

new Game