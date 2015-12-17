
import React from 'react';

const BS = require('react-bootstrap');
const TB = require('react-toolbox');

import {Container} from './commons';
/* stores */
    import GameStore from '../stores/GameStore';

/* constants */
    import {GameEvent} from '../constants/GameConstants';

/* actions */
    import UserAction from '../actions/UserAction';
    import GameAction from '../actions/GameAction';

var data_list = [
    {
        id: 1,
        name: 'BKN-布魯克林籃網 NYK-紐約尼克[主] 12-05 08:05', 
        bet_type: [
            {type: 1, context: '[讓球] 3-50 0.950 0.940', active: false},
            {type: 2, context: '[大小盤] 大 193+50 0.940 小 0.950', active: false},
            {type: 3, context: '[單雙] 單 0.940 雙 0.950', active: false},
            {type: 4, context: '[獨贏] 主隊贏 客隊贏', active: false}
        ]
    },
    {
        id: 2,
        name: 'BKN-布魯克林籃網 NYK-紐約尼克[主] 12-05 08:05', 
        bet_type: [
            {type: 1, context: '[讓球] 3-50 0.950 0.940', active: false},
            {type: 2, context: '[大小盤] 大 193+50 0.940 小 0.950', active: false},
            {type: 3, context: '[單雙] 單 0.940 雙 0.950', active: false},
            {type: 4, context: '[獨贏] 主隊贏 客隊贏', active: false}
        ]
    },
    {
        id: 3,
        name: 'BKN-布魯克林籃網 NYK-紐約尼克[主] 12-05 08:05', 
        bet_type: [
            {type: 1, context: '[讓球] 3-50 0.950 0.940', active: false},
            {type: 2, context: '[大小盤] 大 193+50 0.940 小 0.950', active: false},
            {type: 3, context: '[單雙] 單 0.940 雙 0.950', active: false},
            {type: 4, context: '[獨贏] 主隊贏 客隊贏', active: false}
        ]
    },
];

// console.log(data_list);
var methods = {};
class BetList extends React.Component {

    constructor (props) {
        super(props);
        // let id = UserStore.getGameSelectId();
        let id = 1;
        this.state = {
            games: data_list, 
            button_active: false, 
            bet_chice: '選擇下注：',
            game: GameStore.getGame(id),
            bet_types: [],
            active_items: GameStore.getSelectedBetItems(),
            // Game: Game,
        };

        setTimeout(() => {
            UserAction.signIn('sam', '0000');
        }, 1);
    }

    componentDidMount() {
        methods.onGameUpdated = this.onGameUpdated.bind(this);

        GameStore.on(GameEvent.ON_GAMES_UPDATED, methods.onGameUpdated);

        // GameStore.on(GameEvent.ON_BET_ITEM_SELECTED, methods.onBetItemChanged);
    }


    onGameUpdated () {
        // var id = UserStore.getGameSelectId();
        var id = 1;
        GameStore.getGame(id);
        this.setState({game: GameStore.getGame(id)});
        
    }
    onBetItemChanged () {
        setState({ active_items: GameStore.getSelectedBetItems()});
    }
    onSubmitClick ( id, type ) {
        let {games} = this.state;
        let bet = games.filter(game => game.id === id)[0]
            .bet_type.filter(bet => bet.type === type)[0];
        bet.active = ! bet.active;
        let count = 0;
        
        games.forEach(game => {
            let betlist = game.bet_type;
            betlist.forEach(bettypelist =>{
                if(bettypelist.active===true){
                    count++;
                }
            })

        })
        this.setState({games, count, button_active: true});
    }

    renderBets(data /*racecards*/ ) {
        
        let rows = data.bet_type;
        let columns = [];
        let step = 2;
        for (var i = 0; i < rows.length; i += step) {
            columns.push(rows.slice(i, i + step));
        }
        return columns.map(arr => {
            // console.log(arr);
            return (
                <tr>
                    {arr.map(row => {
                        return (
                            /* <BetType gameId={1} rececordId={2} typeId={3} /> */
                            <td /* className={row.active ? 'active' : '' } */> 
                                <div onClick={this.onSubmitClick.bind(this, data.id, row.type)}> {row.context} {row.active}</div>
                            </td>
                        );
                    })}
                </tr>
            );
        });

    }

    handleSnackbarTimeout (value) {
        // console.log('handleSnackbarClick', event, instance);
        this.setState({ button_active: false });

    };

    handleClick(value) {
        this.setState({ button_active: true });
        let bt_active = this.state.button_active;
        // console.log(bt_active);
    };

    onSubmitClickBet ( item ) {
        GameAction.selectBetItem(item);
    }

    /* 取得所有賽事 */
    renderRacecards() {
        let {game, games} = this.state;
        if (! game) return null;
        return game.getRacecards().map(racecard => {
            return (
                <BS.ListGroupItem header={racecard.getLabel()}>
                    {this.renderRacecardsBet(racecard)}
                </BS.ListGroupItem>
            );
        })
    }


    /* 尚未寫完
    ....(item),
        return this.storage.selected.bet_items.filter(i => i === item).length > 0;
    */

    /*  */
    renderRacecardsBet(racecard) {
        let {game, games} = this.state;
        if (! game) return null;
        let rows = game.getBetTypes();
        return rows.map(bet_type => {
            let teams = racecard.getTeams();
            return (
                <span style={{display: 'block'}}>
                    <span style={{display: 'inline-block', width: '33%'}}>
                        {bet_type.getLabel()}
                    </span>

                    
                    {teams.map(team => {
                        let item = team.getItem(bet_type.getId());
                        /* 檢查 active */
                        // let active = this.isActiveItem(item) ? 'active' : '';
                        return (
                            <span 
                                /*
                                className={active}
                                onClick={this.onSubmitClickBet.bind(this, item)}
                                */
                                style={{display: 'inline-block', width: '33%'}}>
                                {item ? item.getLabel() : null}
                                (
                                {item ? item.getOdds() : null}
                                )
                            </span>
                        )
                    })}
                </span>
            );
        });
        
    }

    render () {
        let {game, games} = this.state;
        return (
            <Container scrollable>
                <div>
                    <BS.ListGroup>
                        {this.renderRacecards()}
                    </BS.ListGroup>

                    <BS.ListGroup>
                        {games.map(data => {
                            return (
                                <BS.ListGroupItem header={data.name}>
                                    <BS.Table bordered condensed hover>
                                        {this.renderBets(data)}
                                    </BS.Table>
                                </BS.ListGroupItem>
                            );
                        })}
                    </BS.ListGroup>
                    <div>
                        <section>
                            <button label='Show snackbar' raised primary onClick={this.handleClick.bind(this)}>確認</button>
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
}


export default BetList;