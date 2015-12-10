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



export default {

    /* 執行登入 */
    signIn,

    /* 執行登出 */
    signOut,
};