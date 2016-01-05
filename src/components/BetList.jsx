
import React from 'react';

const BS = require('react-bootstrap');
const TB = require('react-toolbox');

import {Container} from './commons';
import EventListener from '../plugins/EventListener';
/* stores */
    import GameStore from '../stores/GameStore';

/* constants */
    import {GameEvent} from '../constants/GameConstants';

/* actions */
    import UserAction from '../actions/UserAction';
    import GameAction from '../actions/GameAction';

@EventListener
class BetList extends React.Component {

    constructor (props) {
        super(props);
        // let id = UserStore.getGameSelectId();
        let id = 1;
        this.state = {
            games: {}, 
            button_active: false, 
            bet_chice: '選擇下注：',
            game: GameStore.getGame(id),
            bet_items: [],
            active_items: GameStore.getSelectedBetItems(),
            // Game: Game,
        };

        setTimeout(() => {
            UserAction.signIn('sam', '0000');
        }, 1);
    }

    componentDidMount() {

        this.watch(
            GameStore,
            GameEvent.ON_GAMES_UPDATED,
            this.onGameUpdated.bind(this)
        );

        /*
        this.watch(
            GameStore,
            GameEvent.ON_BET_ITEM_SELECTED,
            this.onBetItemChanged(this)
        );
    */
    }

    onGameUpdated () {
        // var id = UserStore.getGameSelectId();
        var id = 1;
        this.setState({game: GameStore.getGame(id)});
        
    }
    onBetItemChanged () {
        setState({ active_items: GameStore.getSelectedBetItems()});
    }
    onSubmitClick ( id, type ) {
        let {game, games} = this.state;
        
    }

    onSelectBetItem ( item, isSelect ) {
        let bet_items = this.state.bet_items;
        let count = 0;
        let bs_style = this.state.bs_style;
        switch(isSelect) {
            case true:
                bet_items = bet_items.filter(i => i !== item);
                break;
            case false:
                bet_items.push( item );
                break;
        }
        count = bet_items.length;
        this.setState({bet_items, count, button_active: true});
    }

    /* 取得所有賽事 */
    renderRacecards() {
        let {game, games} = this.state;
        if (! game) return null;
        return game.getRacecards().map(racecard => {
            return (
                <div className="list-group-item">
                    <div className="list-group-item-label">
                        {racecard.getLabel()} 
                    </div>
                    {this.renderRacecardsBet(racecard)}
                </div>
            );
        })
    }


    /* 檢查 active */
    isActiveItem(item) {
        return this.state.bet_items.filter(i => i === item).length > 0;
    }
    

    /* 取得賽事的單一玩法 */
    renderRacecardsBet(racecard) {
        let {game, games} = this.state;
        console.log(game);
        if (! game) return null;
        let rows = game.getBetTypes();
        return rows.map(bet_type => {
            let teams = racecard.getTeams();
            return (
                <BS.Row>
                    <BS.Col xs={3}>
                        {bet_type.getLabel()}
                    </BS.Col>
                    <BS.Col xs={9}>
                        {teams.map(team => {
                            let item = team.getItem(bet_type.getId());
                            /* 檢查 active */
                            let isSelect = this.isActiveItem(item); // false
                            let bs_style = isSelect ? 'primary' : 'default';
                            let style = isSelect ? {color: 'red'} : {};
                            style = Object.assign({}, style, {display: 'inline-block', width: '33%'});
                            return (
                                <BS.Button 
                                    bsStyle={bs_style}
                                    style={{width: '50%'}}
                                    onClick={this.onSelectBetItem.bind(this, item, isSelect)} 
                                    >
                                    {item ? item.getLabel() : null}
                                    ( {item ? item.getOdds() : null} )
                                </BS.Button>
                            )
                        })}
                    </BS.Col>
                </BS.Row>
            );
        });
        
    }

    handleSnackbarTimeout (value) {
        this.setState({ button_active: false });
    };

    handleClick(value) {
        // this.setState({ button_active: true });
        let bet_items = this.state.bet_items;
        GameAction.selectBetItems(bet_items);
        this.context.transitionTo('/bet-bill', {
            transition: 'show-from-right'
        });
    };

    render () {
        let {game, games} = this.state;
        return (
            <Container scrollable>
                <div>
                    <div className="list-group">
                        {this.renderRacecards()}
                    </div>
                    <div>
                        <section>
                            <BS.Button bsStyle='primary' 
                                block
                                disabled={this.state.bet_items.length==0}
                                onClick={this.handleClick.bind(this)}>確認
                            </BS.Button>
                            <TB.Snackbar 
                                active={this.state.button_active}
                                icon='question_answer'
                                label={this.state.bet_chice+this.state.count}
                                timeout={2000}
                                onTimeout={this.handleSnackbarTimeout.bind(this)}
                                type='cancel'
                            />
                        </section>
                    </div>
                </div>
            </Container>
        );
    }
};
BetList.contextTypes = {
    transitionTo: React.PropTypes.func
};
export default BetList;