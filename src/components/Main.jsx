
import React from 'react';
import { PropTypes } from 'react-router';

import GameAction from '../actions/GameAction';
import GameStore from '../stores/GameStore';
import { GameEvent } from '../constants/GameConstants';

import '../asset/Main';

const BS = require('react-bootstrap');

let methods = {};

class Main extends React.Component {

    constructor (props) {
        super(props);
        this.state = {name: '', money: '', gameList: []};
    }

    componentDidMount () {
        methods.updateGameList = this.updateGameList.bind(this);

        GameStore.on(GameEvent.ON_GAMES_UPDATED, methods.updateGameList)

        GameAction.updateGames();
    }

    componentWillUnmount () {
        GameStore.removeListener(methods.updateGameList);
    }

    updateGameList () {
        let gameList = GameStore.getGames();
        this.setState({gameList});
    }

    toSignIn () {
        this.context.history.push('/');
    }

    render () {
        return (
            <div id='component-Main'>
                <div className='container'>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className='badge'>AABBCDE</span>
                            會員
                        </li>
                        <li className='list-group-item'>
                            <span className='badge'>123456789000</span>
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
                                <div className='col-xs-4 game-grid' key={row.getId()}>
                                    <div>{row.getName()}</div>
                                </div> 
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

Main.contextTypes = { history: PropTypes.history }
export default Main;