const Card = require('./card')

class Deck {
    constructor() {
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        this._cards = []

        values.forEach(value => {
            suits.forEach(suit => {
                this._cards.push(new Card(suit, value))
            })
        })
    }

    get cards() {
        return this._cards
    }
}

module.exports = Deck