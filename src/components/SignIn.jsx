
import React from 'react';
import { PropTypes } from 'react-router';
import '../asset/SignIn';
const TB = require('react-toolbox');

class SignIn extends React.Component {

    componentDidMount() {
        console.log(this.context.history);
    }

    toMain () {
        this.context.history.push('/main');
    }


    render () {
        return (
            <div id="component-SignIn">
                <div>LOGO</div>
                <div>
                    <span>手機登入畫面</span>
                    <section>
                        <TB.Input type='text' label='Name' name='name' value='guest' maxLength={16} />
                    </section>
                </div>
                <button onClick={this.toMain.bind(this)}> click </button>
            </div>
        );
    }
}
SignIn.contextTypes = { history: PropTypes.history }

export default SignIn;