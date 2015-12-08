


var Game = function(data) {

    let storage = this.storage = {};

    storage.id = parseInt(data.id, 10);
    storage.name= data.name;

};

Game.prototype.getId = function() {
    return this.storage.id;
};

Game.prototype.getName = function() {
    return this.storage.name;
};

export default Game;