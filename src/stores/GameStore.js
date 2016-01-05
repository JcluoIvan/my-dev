
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
/* constains */
    import { GameAction, GameEvent} from '../constants/GameConstants';
    import { UserAction } from '../constants/UserConstants';

import { Game } from '../modules';
let storage = {
    games: [],
    selected: {
        bet_items: [],
    }
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

    getSelectedBetItems() : Array {

    },
    dispatcherIndex: Dispatcher.register(function(data) {
        switch (data.action) {
            case UserAction.SIGN_IN:
            case GameAction.GAMES_UPDATED: {

                storage.games = data.games.map(g => new Game(g));
                GameStore.emit(GameEvent.ON_GAMES_UPDATED);
            } break;

            case GameAction.SELECT_BETITEMS: {

                storage.selected.bet_items = data.bet_items;
                GameStore.emit(GameEvent.ON_BET_ITEM_SELECTED);
            } break;
            
        }

    })


});
export default GameStore;