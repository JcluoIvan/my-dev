import keymirror from 'keymirror';


export default {
    GameAction: keymirror({
        GAMES_UPDATED: null,
        SELECT_BETITEMS: null,

        
    }),
    GameEvent: keymirror({
        /* 更新遊戲資料 */
        ON_GAMES_UPDATED: null,
    })
}