
import Dispatcher from '../dispatcher/Dispatcher';
import { EventEmitter } from 'events';
import { UserAction, UserEvent} from '../constants/UserConstants';

let storage = {
    user: {},
    isSignIn: false,
    validates: {
        account: '', 
        password: '',
    },
    gameSelect: {},
};

const UserStore = Object.assign({}, EventEmitter.prototype, {

    /* 登入狀態 */
    isSignIn() : boolean {
        return storage.isSignIn === true;
    },

    /* user id */
    getId () : Number {
        return storage.user.id;
    },

    /* 帳號 */
    getAccount () : String {
        return storage.user.account;
    },

    /* 姓名 */
    getName () : String {
        return storage.user.name;
    },

    /* 可用金額 */
    getMoney () : Number {
        return storage.user.money;
    },

    getValidates() : Object {
        return storage.validates;
    },

    /* 選定遊戲ID */
    getGameSelectId () : Number {
        return storage.gameSelect.id;
    },

    dispatcherIndex: Dispatcher.register(function(data) {

        switch (data.action) {

            /* 登入成功 */
            case UserAction.SIGN_IN: {
                let {id, account, name, money} = data.user;
                storage.user = {
                    id: parseInt(id, 10),
                    money: Number(money),
                    account,
                    name
                };
                UserStore.emit(UserEvent.ON_SIGNIN);
                break;
            }

            /* 登入失敗 */
            case UserAction.SIGNIN_FAIL: {
                storage.validates.account = data.validates.account;
                storage.validates.password = data.validates.password;
                UserStore.emit(UserEvent.ON_SIGNIN_FAIL);
                break;
            }

            /* 更新使用者資訊 */
            case UserAction.USER_UPDATE: {
                let {id, account, name, money} = data.user;
                storage.user = {
                    id: parseInt(id, 10),
                    money: Number(money),
                    account,
                    name
                };
                UserStore.emit(UserEvent.ON_USER_UPDATE);
                break;
            }

            /* 選定遊戲 */
            case UserAction.GAME_SELECT: {
                let {id} = data.gameSelect;
                storage.gameSelect = {
                    id: parseInt(id, 10),
                };
                UserStore.emit(UserEvent.ON_GAME_SELECT);
                break;
            }
        }

    })


});
export default UserStore;