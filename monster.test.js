const Monster = require('./Monster')
const RandomMonster = require('./Monster')

describe('Monster', () => {
    const testMonster = new Monster();
    const testRandomMonster = new RandomMonster();
    test('Monster name test', () =>{
        expect(testRandomMonster.name).toBe("Gengar")
    })
    test('Monster hp test', () => {
        expect(testRandomMonster.hp).toBe(153)
    })
    test('Monster attack test', () => {
        expect(testRandomMonster.attack).toBe(180)
    })
    
    console.log(testMonster.name)
    console.log(testRandomMonster.name)

    
    
})