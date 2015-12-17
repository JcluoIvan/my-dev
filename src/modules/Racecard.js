

import Team from './Team';
var Racecard = function (data, parent) {
    let storage = this.storage = {
        id: null,
        teams: [
        ],
        label: null,
        time: null,
        parent,
    };
    

    storage.id = parseInt(data.id, 10);
    storage.label = data.label;
    storage.teams = (data.teams || []).map(t => new Team(t, this));
};

Racecard.prototype.getId = function () : Number {
    return this.storage.id;
};
Racecard.prototype.getParent = function () : Object {
    return this.storage.parnet;
}
Racecard.prototype.getTeams = function () : Array {
    return this.storage.teams;
}
Racecard.prototype.getHomeTeam = function() : Object {
    return this.storage.teams.filter(t => t.isHome())[0];
}
Racecard.prototype.getAwayTeam = function() : Object {
    return this.storage.teams.filter(t => t.isAway())[0];
}
Racecard.prototype.getLabel = function () : String {
    return this.storage.label;
}
Racecard.prototype.getTime = function () : Object {
    return this.storage.time;
}

export default Racecard;