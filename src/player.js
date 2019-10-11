class Player {
    constructor(name) {
        this.name = name
        this._cards = []
    }

    get cards() {
        return this._cards
    }

    collect(cards) {
        console.log(`${this.name} receives ${cards.length} cards`, "\n")
        this._cards = [...this._cards, ...cards]
    }

    get numCards() {
        return this._cards.length
    }
}

module.exports = Player