

import BetType from './BetType';
import Racecard from './Racecard';
var Game = function(data) {

    let storage = this.storage = {
        id: null,
        name: null,
        /* BetTypes Module  from ./BetTypes.js */
        bet_types: [],
        /* Racecards Module  from ./Racecards.js */
        racecards: [],
    };

    storage.id = parseInt(data.id, 10);
    storage.name= data.name;
    storage.bet_types = (data.bet_types || []).map(t => new BetType(t, this));
    /*  提取單一賽事 */
    storage.racecards = (data.racecards || []).map(t => new Racecard(t, this));

};

Game.prototype.getId = function() : Number {
    return this.storage.id;
};
Game.prototype.getName = function() : String {
    return this.storage.name;
};
Game.prototype.getBetTypes = function() : Array {
    return this.storage.bet_types;
};
/*  提取所有賽事 */
Game.prototype.getRacecards = function() : Array {
    return this.storage.racecards;
};


export default Game;