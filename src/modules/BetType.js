

var BetType = function (data, parent) {
    let storage = this.storage = {
        id: null, /* type id or type key */
        label: null, /* 玩法名稱 */
    };

    storage.id = parseInt(data.id, 10);
    storage.label = data.label;
 
}

BetType.prototype.getId = function () : Number {
    return this.storage.id;
};
BetType.prototype.getLabel = function () : String {
    return this.storage.label;
};
BetType.prototype.getActive = function () : String {
    return this.storage.active;
};


export default BetType;