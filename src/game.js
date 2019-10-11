const readline = require("readline")
const Player = require("./player")
const Deck = require("./deck")

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
                        this.playGame()
                        rl.close()
                    })
                })
            })
        })
        rl.on("close", function () {
            process.exit(0);
        });
    }

    playGame() {
        this.createGameDeck()
        console.log(this.gameDeck.length)
    }

    createGameDeck() {
        for (let i = 0; i < this.decks; ++i) {
            const deck = new Deck
            deck.shuffle()
            this.gameDeck = [...this.gameDeck, ...deck.cards]
        };
    }
}

new Game