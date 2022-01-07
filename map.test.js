const Map = require('./map')

describe('Map', () => {
    const testMap = new Map();
    
    test('Generate new board test', () =>{
        expect(testMap.genNewBoard()).toStrictEqual([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
    })
    
    console.log(testMap.genNewBoard())
    testMap.printBoard()
    
})
//Next steps

//1. Break up all the arrays, take out a 0, add the [P] 

