const Player = require("../src/player")

describe("Player", () => {
    it("can be created with a name", () => {
        const player = new Player("Jini")
        expect(player.name).toEqual("Jini")
    })

})