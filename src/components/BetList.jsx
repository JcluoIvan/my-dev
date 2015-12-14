
import React from 'react';

const BS = require('react-bootstrap');
const TB = require('react-toolbox');
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

class BetList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            games: data_list, button_active: false, bet_chice: '選擇下注：'
            // Game: Game,
        };
    }

    onSubmitClick ( id, type ) {
        let {games} = this.state;
        let bet = games.filter(game => game.id === id)[0]
            .bet_type.filter(bet => bet.type === type)[0];
        bet.active = ! bet.active;
        let count = 0;
        
        games.forEach(game => {
            let betlist = game.bet_type;
            // console.log(betlist);
            betlist.forEach(bettypelist =>{
                // console.log(bettypelist.type+'...'+bettypelist.active);
                if(bettypelist.active===true){
                    count++;
                }
            })

        })
        // console.log('[count]='+count);
        this.setState({games, count, button_active: true});
    }

    renderBets(data /*racecards*/ ) {
        /*
            let {Game} = this.state;
            racecards.map(rac => {
                <div> rac.getLabel() - rac.getTime() </div>
                Game.getTypes().map( type => {
                    <label> type.getLabel() </label>
                    rac.getTeams().map(team => {
                        item = team.getTypeItem(type.getId());
                        <div> item.getLabel()  item.getOdds() </div>
                    })
                })
            })
            <div>BKN-布魯克林籃網 NYK-紐約尼克[主] 12-05 08:05</div>
                <label> 讓球 <label>
                <div> 3-50 0.940 </div>
                <div> 0.940 </div>

                <label> 大小盤 <label>
                <div> 193+50 0.940 </div>
                <div> 0.950 </div>

            <div>BKN-布魯克林籃網 NYK-紐約尼克[主] 12-05 08:05</div>
                <label> 讓球 <label>
                <div> 3-50 0.940 </div>
                <div> 0.940 </div>

                <label> 大小盤 <label>
                <div> 193+50 0.940 </div>
                <div> 0.950 </div>

        */
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
                            <td className={row.active ? 'active' : ''}> 
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

    render () {
        let {games} = this.state;
        return (
            <div>
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
                    {/*
                        Game.getRacecards().map(Rac => {
                            
                        })


                    */}
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
        );
    }
}


export default BetList;