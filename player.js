class Player {
    constructor (name,hp,attack) {
        this.name = name
        this.hp = hp
        this.attack = Math.floor(Math.random() * 200)
    }

}
class Swampert extends Player {
    constructor (name,hp,attack) {
        super(name,hp,attack)
        this.name = "Swampert"
        this.hp = 173
        this.attack = 80
    }
}


module.exports = Player

module.exports = Swampert