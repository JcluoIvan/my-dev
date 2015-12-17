

var BetItem = function (data, parent) {
    let storage = this.storage = {
        id: null, /* type id or type key */
        label: null, /* 球頭 3-50 (string) */
        values: [], /* 球投資料 3, -50 */
        odds: 0, /* 賠率 */
        parent,
    };
    
    storage.id = parseInt(data.id, 10);
    storage.label = data.label;
    storage.odds = Number(data.odds);

}

BetItem.prototype.getId = function () : Number {
    return this.storage.id;
};
BetItem.prototype.getLabel = function () : String {
    return this.storage.label;
};
BetItem.prototype.getValues = function () : Array {
    return this.storage.values;
};
BetItem.prototype.getOdds = function () : Number {
    return this.storage.odds;
};
BetItem.prototype.getParent = function () : Object {
    return this.storage.parnet;
}

export default BetItem;