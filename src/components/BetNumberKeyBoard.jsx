import React from 'react';

import '../asset/BetNumberKeyBoard';

const BS = require('react-bootstrap');

class BetNumberKeyBoard extends React.Component {

    render () {
        return (
            <div className='BetNumberKeyBoard'>
                <BS.Collapse in={true}>
                    <div className='box'>
                        <div className='top'>
                            <div className='number'>
                                <button className='size'> 1 </button>
                                <button className='size'> 2 </button>
                                <button className='size'> 3 </button>
                                <button className='size'> 4 </button>
                                <button className='size'> 5 </button>
                                <button className='size'> 6 </button>
                                <button className='size'> 7 </button>
                                <button className='size'> 8 </button>
                                <button className='size'> 9 </button>
                                <button className='size'> 0 </button>
                            </div>

                            <div className='amount'>
                                <button className='size'> 100 </button>
                                <button className='size'> 500 </button>
                                <button className='size'> 1000 </button>
                                <button className='size'> 10000</button>
                            </div>
                        </div>

                        <div className='dowm'>
                            <button> 清除 </button>
                            <button> <div> 送出注單 </div> <div> 可贏 1000000 </div> </button>
                        </div>
                    </div>

                </BS.Collapse>
            </div>
        );
    }
}

export default BetNumberKeyBoard;