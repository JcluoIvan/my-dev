import keymirror from 'keymirror';


export default {
    UserAction: keymirror({
        SIGN_IN: null,
        SIGN_OUT: null,
        SIGNIN_FAIL: null,
        USER_UPDATE: null,
        GAME_SELECT: null,
    }),
    UserEvent: keymirror({
        /* 登入成功 */
        ON_SIGNIN: null,
        /* 登入失敗 */
        ON_SIGNIN_FAIL: null,
        /* 登出 */
        ON_SIGNOUT: null,
        /* 更新使用者資訊 */
        ON_USER_UPDATE: null,
        /* 選定遊戲 */
        ON_GAME_SELECT: null,
    })
}