import Bet from './Bet';

var Team function (data, parent) {
    let storage = this.storage = {
        id: null, /* BKN or NYK ..... */
        label: '', /*隊伍名稱*/
        type: 'H' /*true:  H 主隊 , false: C 客隊 */
        strong: boolean,
        items: [], /* types data */
        parent,
    };
    

    storage.bets = data.bets.map(b => new Bet(b, this));
};

Racecard.prototype.getId = function () : Number {
    return this.storage.id;
};
Racecard.prototype.getLabel = function () : Number {
    return this.storage.label;
};
Racecard.prototype.getType = function () : String {
    return this.storage.type;
};
Racecard.prototype.getStrong = function () : Boolean {
    return this.storage.strong;
};
Racecard.prototype.getItems = function () : Array {
    return this.storage.items;
};
Racecard.prototype.getParnet = function () : Object {
    return this.storage.parnet;
}

isHome () {
        return this.storage.type === 'H';
    }
isAway () {
        return this.storage.type === 'C';
    }

export default Team;