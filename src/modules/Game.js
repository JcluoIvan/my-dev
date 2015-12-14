


var Game = function(data) {

    let storage = this.storage = {
        id: null,
        name: null,
        types: [],
        racecards: [],
    };

    storage.id = parseInt(data.id, 10);
    storage.name= data.name;

};

Game.prototype.getId = function() : Number {
    return this.storage.id;
};
Game.prototype.getName = function() : String {
    return this.storage.name;
};
Game.prototype.getTypes = function() : Array {
    return this.storage.types;
};
Game.prototype.getRacecards = function() : Array {
    return this.storage.racecards;
};


export default Game;