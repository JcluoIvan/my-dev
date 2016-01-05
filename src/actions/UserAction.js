import Dispatcher from '../dispatcher/Dispatcher';
import { UserAction } from '../constants/UserConstants';

import Ajax from '../plugins/Ajax';

/* test */

    var test = {
        types: [
            {id: 1, label: '讓球'},
            {id: 2, label: '大小盤'},
            {id: 3, label: '單雙'},
            {id: 4, label: '獨贏'},
        ],
        racecards: [
            {
                id: 1, 
                label: 'BKN-布魯克林籃網 NYK-紐約尼克[主] 12-05 08:05',
                time: new Date,
                teams: [
                    {
                        id: 'BKN',
                        label: '布魯克林籃網',
                        type: 'C',
                        strong: false,
                        items: [
                            {
                                id: 1,
                                label: '3-50',
                                values: [3, -50],
                                odds: 0.950
                            },
                            {
                                id: 2,
                                label: '193+50',
                                values: [193, +50],
                                odds: 0.950
                            },
                            {
                                id: 3,
                                label: '單',
                                values: null,
                                odds: 0.940
                            },
                            {
                                id: 4,
                                label: '客隊贏',
                                values: null,
                                odds: 0.950
                            }
                        ],
                    },
                    {
                        id: 'NYK',
                        label: '紐約尼克',
                        type: 'H',
                        strong: true,
                        items: [
                            {
                                id: 1,
                                label: null,
                                values: null,
                                odds: 0.950
                            },
                            {
                                id: 2,
                                label: null,
                                values: null,
                                odds: 0.940
                            },
                            {
                                id: 3,
                                label: '雙',
                                values: null,
                                odds: 0.950
                            },
                            {
                                id: 4,
                                label: '主隊贏',
                                values: null,
                                odds: 0.950
                            }
                        ],
                    }
                ],

            },
        ]

    }

/* test end */ 


/* 執行登入 */
let signIn = function (account, password) {
    /* do ajax */
    let [id, name, money] = [1, 'User', 10000];
    /* ajax finish */
    if('sam' === account && '0000' === password){
        Dispatcher.dispatch({
            action: UserAction.SIGN_IN,
            user: {id, account, name, money},
            games: [
                {id: 1, name: 'NBA 籃球', bet_types: test.types, racecards: test.racecards},
                {id: 2, name: 'CPBL 棒球'},
                {id: 3, name: 'SBL 籃球'},
                {id: 4, name: 'CBL 籃球'},
                {id: 5, name: 'CBL 籃球'},
                {id: 6, name: 'ABL 籃球'},
                {id: 7, name: 'CBA 籃球'},
                {id: 8, name: 'NBL 籃球'},
                {id: 9, name: 'ACB 籃球'},
                {id: 10, name: 'EL 籃球'},
            ]
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