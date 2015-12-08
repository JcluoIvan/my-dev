import keymirror from 'keymirror';


export default {
    UserAction: keymirror({
        SIGN_IN: null,
        SIGN_OUT: null,
        
    }),
    UserEvent: keymirror({
        /* 登入成功 */
        ON_SIGNIN: null,
        /* 登入失敗 */
        ON_SIGNIN_FAIL: null,
        /* 登出 */
        ON_SIGNOUT: null,
    })
}