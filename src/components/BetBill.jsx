
import React from 'react';

import { Container } from './commons';

import '../asset/BetBill';

import BetNumberKeyBoard from './BetNumberKeyBoard';


const BS = require('react-bootstrap');

class BetBill extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    changeNumDiskStatus() {
        this.setState({isOpen: !this.state.isOpen});
    }

    renderBetNumberKeyBoard() {
        return (this.state.isOpen && <BetNumberKeyBoard key={0} />);
    }

    render () {
        return (
            <Container scrollable> 
                <div id='component-BetBill'>

                    <div className='bet-box'>
                        <div className='glyph pull-left'>
                            <BS.Glyphicon glyph="remove"/> 
                        </div>
                        <div className='pull-left' onClick={this.changeNumDiskStatus.bind(this)}>
                            <div className='team pull-left'>
                                <div className='row'> BKN-布魯克林籃網 </div>
                                <div className='row'> NYK-紐約尼克[主] </div>
                                <div className='row'> 12-05 08:05 </div>
                            </div>

                            <div className='item pull-left'>
                                <div className='row color-blue'> NYK-紐約尼克[主] </div>
                                <div className='row'>
                                    <div className='handicap pull-left'>
                                        <div> 讓球 </div>
                                        <div className='color-red'> 0.95 </div>
                                    </div>
                                    <div className='money-box pull-right'></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {this.renderBetNumberKeyBoard()}

                    <div className='bet-box'>
                        <div className='glyph pull-left'>
                            <BS.Glyphicon glyph="remove" /> 
                        </div>

                        <div className='team pull-left'>
                            <div className='row'> BKN-布魯克林籃網 </div>
                            <div className='row'> NYK-紐約尼克[主] </div>
                            <div className='row'> 12-05 08:05 </div>
                        </div>

                        <div className='item pull-left'>
                            <div className='row color-blue'> BKN-布魯克林籃網 </div>
                            <div className='row'>
                                <div className='handicap pull-left'>
                                    <div> 讓球 </div>
                                    <div>
                                        <span> 3-50 </span>
                                        <span className='color-red'>0.95</span>
                                    </div>
                                </div>
                                <div className='money-box pull-right'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}


export default BetBill;