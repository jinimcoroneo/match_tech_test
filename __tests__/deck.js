const Deck = require('../src/deck')
const Card = require('../src/card')

describe('Deck', () => {
    it('properly gets initialized with 52 cards', () => {
        const deck = new Deck()
        expect(deck.cards.length).toEqual(52)
        expect(deck.cards[0] instanceof Card).toBe(true)
    })

    it("can be shuffled", () => {
        const deck = new Deck()
        const unshuffled = deck.cards.slice()
        expect(unshuffled).toEqual(deck.cards)
        deck.shuffle()
        expect(unshuffled).not.toEqual(deck.cards)
    })
})