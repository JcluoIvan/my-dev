
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import { GameAction, GameEvent} from '../constants/GameConstants';

import { Game } from '../modules';
let storage = {
    games: [],
};

const GameStore = Object.assign({}, EventEmitter.prototype, {

    /* 取得遊戲清單 */
    getGames() : Array {
        return storage.games
    },

    /* 取得 {id} 遊戲資料 (module/game) */
    getGame (id) : Object {
        return storage.games.filter(g => g.getId() === id)[0] || null;
    },

    dispatcherIndex: Dispatcher.register(function(data) {
        switch (data.action) {
            case GameAction.GAMES_UPDATED:
                storage.games = data.games.map(g => new Game(g));
                GameStore.emit(GameEvent.ON_GAMES_UPDATED);
                break;
            
        }

    })


});
export default GameStore;