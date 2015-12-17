
import React from 'react';

import { Container } from './commons';

import '../asset/BetBill';


const BS = require('react-bootstrap');




class BetBill extends React.Component {
    render () {
        return (
            <Container scrollable>
                <div id='component-BetBill'>

                    <div className='bet-box'>
                        <div className='glyph pull-left'>
                            <BS.Glyphicon glyph="remove"/> 
                        </div>

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
                                <div className='money-box pull-right'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <BS.Collapse in={true}>
                        <BS.Well>
                            <BS.ButtonGroup>
                                <BS.Button>1</BS.Button>
                                <BS.Button>2</BS.Button>
                                <BS.Button>3</BS.Button>
                                <BS.Button>4</BS.Button>
                                <BS.Button>5</BS.Button>
                                <BS.Button>6</BS.Button>
                                <BS.Button>7</BS.Button>
                                <BS.Button>8</BS.Button>
                                <BS.Button>9</BS.Button>
                                <BS.Button>0</BS.Button>
                            </BS.ButtonGroup>
                            <BS.ButtonGroup>
                                <BS.Button>100</BS.Button>
                                <BS.Button>500</BS.Button>
                                <BS.Button>1000</BS.Button>
                                <BS.Button>10000</BS.Button>
                            </BS.ButtonGroup>
                            <BS.ButtonGroup>
                                <BS.Button>清除</BS.Button>
                                <BS.Button>清除</BS.Button>
                                <BS.Button>送出注單 可贏 1000000</BS.Button>
                            </BS.ButtonGroup>
                        </BS.Well>
                    </BS.Collapse>

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