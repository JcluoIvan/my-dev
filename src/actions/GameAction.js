import Dispatcher from '../dispatcher/Dispatcher';
import { GameAction } from '../constants/GameConstants';

import Ajax from '../plugins/Ajax';

/* 更新遊戲清單 */
let updateGames = function () {

    /* ajax ... */
    let games = [
        {id: 1, name: 'MLB 棒球'},
        {id: 2, name: 'CPBL 棒球'},
        {id: 3, name: 'SBL 籃球'},
        {id: 4, name: 'CBL 籃球'},
        {id: 5, name: 'CBL 籃球'},
        {id: 6, name: 'ABL 籃球'},
        {id: 7, name: 'CBA 籃球'},
        {id: 8, name: 'NBL 籃球'},
        {id: 9, name: 'ACB 籃球'},
        {id: 10, name: 'EL 籃球'},
    ];
    /* ajax finish */

    Dispatcher.dispatch({
        action: GameAction.GAMES_UPDATED,
        games,
    });
};

let selectBetItems = function(bet_items){
    Dispatcher.dispatch({
        action: GameAction.SELECT_BETITEMS,
        bet_items,
    })
};

// let selectBetItem = function (bet_item) {

//     Dispatcher.dispatch({
//         action: GameAction.SELECT_BET_ITEM,
//         bet_item,
//     });

// };

// let unSelectBetItem = function (bet_item) {

//     Dispatcher.dispatch({
//         action: GameAction.UNSELECT_BET_ITEM,
//         bet_item,
//     });

// };



export default {

    /* 更新遊戲清單 */
    updateGames,
    // selectBetItem,
    // unSelectBetItem,
    selectBetItems,
};