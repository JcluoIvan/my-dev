import Dispatcher from '../dispatcher/Dispatcher';
import { UserAction } from '../constants/UserConstants';

import Ajax from '../plugins/Ajax';

/* 執行登入 */
let signIn = function (account, password) {
    Dispatcher.dispatch({
        action: UserAction.SIGN_IN,
        user: {account, password},
    });
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