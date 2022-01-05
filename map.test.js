const Map = require('./map')

describe('Map', () => {
    const testMap = new Map();
    
    test('Generate new board test', () =>{
        expect(testMap.genNewBoard()).toStrictEqual([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
    })
    
    console.log(testMap.genNewBoard())
    testMap.printBoard()
    
})
//QUESTIONS

//1.How to skip a line in the output)

