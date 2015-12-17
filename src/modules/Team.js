

import BetItem from './BetItem';
var Team = function (data, parent) {
    let storage = this.storage = {
        id: null, /* BKN or NYK ..... */
        label: '', /*隊伍名稱*/
        type: 'H', /*true:  H 主隊 , false: C 客隊 */
        strong: null, /* boolean */
        /* BetItem Module  from ./BetItem.js */
        items: [], /* types data */
        parent,
    };
    
    storage.id = parseInt(data.id, 10);
    storage.label = String(data.label);
    storage.type = String(data.type);
    storage.strong = data.strong;
    storage.items = (data.items || []).map(t => new BetItem(t, this));

};

Team.prototype.getId = function () : Number {
    return this.storage.id;
};
Team.prototype.getLabel = function () : Number {
    return this.storage.label;
};
Team.prototype.getType = function () : String {
    return this.storage.type;
};
Team.prototype.getStrong = function () : Boolean {
    return this.storage.strong;
};
Team.prototype.getItems = function () : Array {
    return this.storage.items;
};
Team.prototype.getItem = function (id) : Array {
    return this.storage.items.filter(i => {
        return i.getId() === id;
    })[0] || null;
}
Team.prototype.getParnet = function () : Object {
    return this.storage.parnet;
}

function isHome() {
        return this.storage.type === 'H';
    }
function isAway() {
        return this.storage.type === 'C';
    }

export default Team;  