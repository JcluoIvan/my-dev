
import React from 'react';
import { PropTypes } from 'react-router';
import '../asset/SignIn';
const TB = require('react-toolbox');

class SignIn extends React.Component {

    constructor (props) {
        super(props);
        this.state = {acc: '', pass: ''};
        // this.setState({account: '', password})
    }

    componentDidMount() {
        console.log(this.context.history);
    }

    toMain () {
        this.context.history.push('/main');
    }

    onAccountChange (value) {
        this.setState({acc: value});
    }

    onPasswordChange (value) {
        let star = new Array(value.length + 1).join('*');
        this.setState({pass: star});
    }


    render () {
        return (
            <div id="component-SignIn">
                <div>LOGO</div>
                <div>
                    <span>手機登入畫面</span>
                    <section>
                        <TB.Input type='text' label='帳號' onChange={this.onAccountChange.bind(this)} 
                            value={this.state.acc} />
                        <TB.Input type='password' label='密碼' onChange={this.onPasswordChange.bind(this)} 
                            value={this.state.pass} />
                    </section>
                </div>
                <button onClick={this.toMain.bind(this)}> click </button>
            </div>
        );
    }
}
SignIn.contextTypes = { history: PropTypes.history }

export default SignIn;