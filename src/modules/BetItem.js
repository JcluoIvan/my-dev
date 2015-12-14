import Bet from './Bet';

var BetItem function (data, parent) {
    let storage = this.storage = {
        id: null, /* type id or type key */
        label: null, /* 球頭 */
        values: [], /* 球投資料 */
        odds: 0, /* 賠率 */
        parent,
    };
 
}

Racecard.prototype.getId = function () : Number {
    return this.storage.id;
};
Racecard.prototype.getLabel = function () : String {
    return this.storage.label;
};
Racecard.prototype.getValues = function () : Array {
    return this.storage.values;
};
Racecard.prototype.getOdds = function () : Number {
    return this.storage.odds;
};
Racecard.prototype.getGame = function () : Object {
    return this.storage.parnet;
}

export default BetItem;