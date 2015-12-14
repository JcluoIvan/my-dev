


var Bet = function(data, parent) {

    let storage = this.storage = {
        id: null,
        label: '3-50',
        odds: '0.940'
        parent,
    };

};

Racecard.prototype.getId = function () : Number {
    return this.storage.id;
};
Racecard.prototype.getLabel = function () : String {
    return this.storage.label;
};
Racecard.prototype.getOdds = function () : String {
    return this.storage.odds;
};
Racecard.prototype.getGame = function () : Object {
    return this.storage.parnet;
}

export default Bet;