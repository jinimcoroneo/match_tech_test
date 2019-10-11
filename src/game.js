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

        rl.question("How many packs of cards? ", _numDecks => {
            const numDecks = parseInt(_numDecks)
            if (!Number.isInteger(numDecks)) {
                console.log("You must enter an integer, please try again")
                return rl.close()
            }
            const nextQuestion = numDecks === 1 ? "Match on: a) face value, b) suit: " : "Match on: a) face value, b) suit, c) both: "
            rl.question(nextQuestion, response => {
                if (numDecks === 1 && !['a', 'b'].includes(response)) {
                    console.log("You must choose a or b, please try again")
                    return rl.close()
                }
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
        this.playCards()
    }

    createGameDeck() {
        for (let i = 0; i < this.decks; ++i) {
            const deck = new Deck
            deck.shuffle()
            this.gameDeck = [...this.gameDeck, ...deck.cards]
        };
    }

    playCards() {
        while (this.gameDeck.length > 0) {
            const cardOne = this.gameDeck.pop()
            const cardTwo = this.gameDeck.pop()
            this.checkForMatch(cardOne, cardTwo)
        }
    }

    checkForMatch(cardOne, cardTwo) {
        this.playedCards = [...this.playedCards, cardOne, cardTwo]
        console.log(`${cardOne.value} of ${cardOne.suit} and ${cardTwo.value} of ${cardTwo.suit}`)
        switch (this.matchingCondition) {
            case 'a': // Face value
                if (cardOne.value === cardTwo.value) {
                    this.giveCardsToPlayer(this.playedCards)
                }
                break;
            case 'b': // Suit
                if (cardOne.suit === cardTwo.suit) {
                    this.giveCardsToPlayer(this.playedCards)
                }
                break;

            default: // Both (using default implies correct construction of the decks)
                if (cardOne.suit === cardTwo.suit && cardOne.value === cardTwo.value) {
                    this.giveCardsToPlayer(this.playedCards)
                }
        }
    }

    giveCardsToPlayer(cards) {
        const winner = this.chooseRandomPlayer()
        console.log("\n", `${winner.name} says Match!`)
        winner.collect(cards)
        this.playedCards = []
    }

    chooseRandomPlayer() {
        return Math.random() < 0.5 ? this.playerOne : this.playerTwo;
    }
}

new Game