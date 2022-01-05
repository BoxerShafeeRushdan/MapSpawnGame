class Map {
    constructor (emptyBoard){
       
        this.emptyBoard = emptyBoard
        
    }

    genNewBoard(){
       
     return   this.emptyBoard = ['NEW GAME',[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    }
}

module.exports = Map 