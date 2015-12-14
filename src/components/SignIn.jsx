
import React from 'react';
import { PropTypes } from 'react-router';
import '../asset/SignIn.less';
import UserStore from '../stores/UserStore';
import UserAction from '../actions/UserAction';
import { UserEvent } from '../constants/UserConstants';
const TB = require('react-toolbox');
const BS = require('react-bootstrap');

let methods = {};
class SignIn extends React.Component {

    constructor (props) {
        super(props);
        this.state = {acc: '', pass: '', accerror: '', passerror: ''};
    }

    componentDidMount() {
        methods.handlerValidates = this.handlerValidates.bind(this);
        UserStore.on(UserEvent.ON_SIGNIN_FAIL, methods.handlerValidates);
        // console.log(methods.handlerValidates);
        // console.log(this.context.history);
    }

    componentWillUnmount() {
        UserStore.removeListener(UserEvent.ON_SIGNIN_FAIL, methods.handlerValidates);
    }

    toMain () {
        this.context.history.push('/main');
    }

    handlerValidates() {
        let signData = UserStore.getValidates();
        this.setState({accerror: signData.account});
        this.setState({passerror: signData.account});
    }

    onAccountChange (value) {
        this.setState({acc: value});
        this.setState({accerror: ''});
    }

    onPasswordChange (value) {
        this.setState({pass: value});
        this.setState({passerror: ''});
    }

    onSubmitClick () {
        let accerror = null;
        let passerror = null;
        if(this.state.acc.length==0){
            accerror = '帳號不可為空';
        }
        if(this.state.pass.length==0){
            passerror = '密碼不可為空';
        }
        this.setState({accerror, passerror});
        if (accerror === null && passerror === null) {
            UserAction.signIn(this.state.acc, this.state.pass);
        }

    }


    render () {
        // let star = new Array(this.state.pass.length + 1).join('*');
        return (
            <div id="component-SignIn">
                <BS.Well>
                    <BS.PageHeader style={{textAlign: 'center'}}> LOGO </BS.PageHeader>
                </BS.Well>
                <div className="container">
                    <form role="form">
                        <div className="form-group">
                            <TB.Input 
                            type='text' 
                            label='帳號' 
                            error={this.state.accerror} 
                            onChange={this.onAccountChange.bind(this)} 
                            value={this.state.acc} />
                        </div>
                        <div className="form-group">
                            <TB.Input 
                            type='password' 
                            label='密碼'
                            error={this.state.passerror} 
                            onChange={this.onPasswordChange.bind(this)} 
                            value={this.state.pass} />
                        </div>
                      <button onClick={this.onSubmitClick.bind(this)} className="btn btn-primary btn-block">登入</button>
                    </form>
                </div>
            </div>
        );
    }
}
SignIn.contextTypes = { history: PropTypes.history }

export default SignIn;