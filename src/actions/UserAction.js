import Dispatcher from '../dispatcher/Dispatcher';
import { UserAction } from '../constants/UserConstants';

import Ajax from '../plugins/Ajax';

/* 執行登入 */
let signIn = function (account, password) {
    /* do ajax */
    let [id, name, money] = [1, 'User', 10000];
    /* ajax finish */
    if('sam' === account && '0000' === password){
        Dispatcher.dispatch({
            action: UserAction.SIGN_IN,
            user: {id, account, name, money}
        });
    } else {
        Dispatcher.dispatch({
            action: UserAction.SIGNIN_FAIL,
            validates: {account: '帳號錯誤！', password: '密碼錯誤！'}
        });
    }
    
};

/* 執行登出 */
let signOut = function () {
    Dispatcher.dispatch({
        action: UserAction.SIGN_OUT
    })
};

/* 更新使用者 */
let updateUser = function (id, account, name, money) {
    let user = {
        id: 1,
        account: 'jyun',
        name: 'jyun',
        money: money ? money : 100,
    };

    Dispatcher.dispatch({
        action: UserAction.USER_UPDATE,
        user,
    });
}

/* 選定遊戲 */
let gameSelect = function (id) {
    let gameSelect = {id};

    Dispatcher.dispatch({
        action: UserAction.GAME_SELECT,
        gameSelect,
    });
}



export default {

    /* 執行登入 */
    signIn,

    /* 執行登出 */
    signOut,

    /* 更新使用者 */
    updateUser,

    /* 選定遊戲 */
    gameSelect,
};