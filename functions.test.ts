const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Shuffle array returns array', () =>{
        expect(shuffleArray).toEqual(shuffleArray)
    })

    test('Same length', () => {
        expect(shuffleArray).toHaveLength(1)
    })
})