const Map = require('./map')

describe('Map', () => {
    const testMap = new Map();
    
    test('Has right row 1', () =>{
        expect(testMap.row1).toBe([0,0,0,0])
    })
})


//QUESTIONS

//1.Legacy octal literals are not allowed in strict mode. (how to turn off strict mode to start #'s with 0)

