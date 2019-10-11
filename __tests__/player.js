const Player = require("../src/player")
const Card = require("../src/card")


describe("Player", () => {
    it("can be created with a name", () => {
        const player = new Player("Jini")
        expect(player.name).toEqual("Jini")
    })

    it("can collect cards", () => {
        const player = new Player("Jini")
        const card = new Card('S', 'A')
        player.collect([card])
        expect(player.cards.length).toEqual(1)
        expect(player.cards[0]).toEqual(card)
    })

})