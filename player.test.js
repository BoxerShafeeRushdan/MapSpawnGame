const Player = require('./player')
const RandomPlayer = require('./player')

describe('Player', () => {
    const testPlayer = new Player();
    const testRandomPlayer = new RandomPlayer();
    test('Player name test', () =>{
        expect(testRandomPlayer.name).toBe("Swampert")
    })
    test('Player hp test', () => {
        expect(testRandomPlayer.hp).toBe(173)
    })
    test('Player attack test', () => {
        expect(testRandomPlayer.attack).toBe(80)
    })
    
    console.log(testPlayer.name)
    console.log(testRandomPlayer.name)

    
    
})