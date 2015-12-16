
import React from 'react';

import { Container } from './commons';

import '../asset/BetBill';


const BS = require('react-bootstrap');


class BetBill extends React.Component {
    render () {
        return (
            <Container scrollable>
                <div id='component-BetBill'>
                    <div className='form-group'>
                        <div className='remove margin-right-15 algin-center pull-left'>
                            <BS.Glyphicon glyph="remove" /> 
                        </div>

                        <div className='team pull-left'>
                            <div className='row'> BKN-布魯克林籃網 </div>
                            <div className='row'> NYK-紐約尼克[主] </div>
                            <div className='row'> 12-05 08:05 </div>
                        </div>

                        <div className='item pull-right'>
                            <div> NYK-紐約尼克[主] </div>
                            <div>
                                <div className='pull-left margin-right-30'>
                                    <div> 讓球 </div>
                                    <div> 0.95 </div>
                                </div>
                                <div className='pull-right'>
                                    boxxxxxx
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}


export default BetBill;