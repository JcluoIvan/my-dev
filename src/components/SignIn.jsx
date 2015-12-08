
import React from 'react';
import { PropTypes } from 'react-router';
import './asset/SignIn';

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
                <button onClick={this.toMain.bind(this)}> click </button>
            </div>
        );
    }
}
SignIn.contextTypes = { history: PropTypes.history }

export default SignIn;