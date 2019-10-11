class Player {
    constructor(name) {
        this.name = name
        this._cards = []
    }

    get cards() {
        return this._cards
    }
}

module.exports = Player