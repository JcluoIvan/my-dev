
import GameDipatcher from '../dispatcher/GameDipatcher';
import { EventEmitter } from 'events';
import { UserAction, UserEvent} from '../constants/UserConstants';

let storage = {
    games: {},
};

const UserStore = Object.assign({}, EventEmitter.prototype, {

    /* 取得遊戲清單 */
    getGames() : Array {
        return storage.games
    },

    /* 取得 {id} 遊戲資料 (module/game) */
    getGame (id) : Object {
        return storage.games.filter(g => g.getId() === id)[0] || null;
    },

    dispatcherIndex: GameDipatcher.register(function(data) {
        switch (data.action) {
            
        }

    })


});
export default UserStore;