
import React from 'react';
import { PropTypes } from 'react-router';

import GameAction from '../actions/GameAction';
import GameStore from '../stores/GameStore';
import { GameEvent } from '../constants/GameConstants';
import { Container } from './commons';

import UserAction from '../actions/UserAction';
import UserStore from '../stores/UserStore';
import { UserEvent } from '../constants/UserConstants';

import '../asset/Main';

const BS = require('react-bootstrap');

let methods = {};

class Main extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            name: UserStore.getName(),
            money: UserStore.getMoney(),
            gameList: GameStore.getGames()
        };
    }

    componentDidMount () {
        methods.handleUpdateGameList = this.handleUpdateGameList.bind(this);
        methods.handleUpdateUser = this.handleUpdateUser.bind(this);
        methods.goGameBet = this.goGameBet.bind(this);

        GameStore.on(GameEvent.ON_GAMES_UPDATED, methods.handleUpdateGameList);
        UserStore.on(UserEvent.ON_USER_UPDATE, methods.handleUpdateUser);
        UserStore.on(UserEvent.ON_GAME_SELECT, methods.goGameBet);

        GameAction.updateGames();
        UserAction.updateUser(1, 'jyun', 'jyun', 120);
    }

    componentWillUnmount () {
        GameStore.removeListener(GameEvent.ON_GAMES_UPDATED, methods.handleUpdateGameList);
        UserStore.removeListener(UserEvent.ON_USER_UPDATE, methods.handleUpdateUser);
        UserStore.removeListener(UserEvent.ON_GAME_SELECT, methods.goGameBet);
    }

    handleUpdateUser () {
        let name = UserStore.getName();
        let money = UserStore.getMoney();
        this.setState({name, money});
    }

    handleUpdateGameList () {
        let gameList = GameStore.getGames();
        this.setState({gameList});
    }

    goGameBet () {
        this.context.transitionTo('/bet-list', {transition: 'show-from-right'});
    }

    gameSelect (id) {
        UserAction.gameSelect(id);
    }

    toSignIn () {
        this.context.history.push('/');
    }

    render () {
        return (
            <Container scrollable>
                <div id='component-Main'>
                    <div className='container'>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                <span className='badge'>{this.state.name}</span>
                                會員
                            </li>
                            <li className='list-group-item'>
                                <span className='badge'>{this.state.money}</span>
                                目前餘額
                            </li>
                            <li className='list-group-item'>
                                <button type='button' className='btn btn-xs btn-default pull-right'>
                                    查看注單
                                    <span className='badge'>9+</span>
                                </button>
                                目前注單
                            </li>
                        </ul>
                    </div>
                    <div className='container-fluid'>
                        <div className='row-fluid'>
                            {this.state.gameList.map( row => {
                                return (
                                    <div className='col-xs-4 game-grid' key={row.getId()} onClick={this.gameSelect.bind(this, row.getId())}>
                                        <div>{row.getName()}</div>
                                    </div> 
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

Main.contextTypes = { transitionTo: React.PropTypes.func }
export default Main;