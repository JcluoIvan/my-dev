import Bet from './Bet';

var BetType function (data, parent) {
    let storage = this.storage = {
        id: null, /* type id or type key */
        label: null, /* 玩法名稱 */
    };
 
}

Racecard.prototype.getId = function () : Number {
    return this.storage.id;
};
Racecard.prototype.getLabel = function () : String {
    return this.storage.label;
};

export default BetType;