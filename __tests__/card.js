const Card = require('../src/card')

describe('Card', () => {
    it('has a suit and a value', () => {
        const card = new Card('Hearts', '5')
        expect(card.suit).toEqual('Hearts')
        expect(card.value).toEqual('5')
    })
})