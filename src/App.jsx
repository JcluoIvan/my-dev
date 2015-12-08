import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router';
const TB = require('react-toolbox');
const BS = require('react-bootstrap');


import AppAction from './actions/AppAction';
import AppStore from './stores/AppStore';
import { StoreEvent } from './constants/AppConstants';

import UserAction from './actions/UserAction';
import UserStore from './stores/UserStore';
import { UserEvent } from './constants/UserConstants';


import MyComponents from './components'

let methods = {};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    componentDidMount() {
        methods.handlerDemo = this.handlerDemo.bind(this);
        methods.handlerSignIn = this.handlerSignIn.bind(this);

        AppStore.on(StoreEvent.ON_DEMO, methods.handlerDemo);
        UserStore.on(UserEvent.ON_SIGNIN, methods.handlerSignIn);

    }

    componentWillUnmount() {
        AppStore.removeListener(StoreEvent.ON_DEMO, methods.handlerDemo);
        UserStore.removeListener(UserEvent.ON_SIGNIN, methods.handlerSignIn);
    }

    handlerSignIn() {
        console.log('SignIn');
    }

    handlerDemo () {

        let message = AppStore.getDemoMessage();
        if (message.length > 5) UserAction.signIn();
        this.setState({message});
    }

    onMessageChange (value) {

        AppAction.demo(value);

    }    

    render () {
        return (
            <div>
                <TB.Input 
                    type="text" 
                    label="Account 22" 
                    onChange={this.onMessageChange}
                    value={this.state.message}/>
                <BS.Well>
                    {this.state.message}
                </BS.Well>
                <BS.Button bsStyle="primary" block>Click</BS.Button>
                  <TB.IconMenu icon='more_vert' position='top-left' menuRipple>
                    <TB.MenuItem value='download' icon='get_app' caption='Download' />
                    <TB.MenuItem value='help' icon='favorite' caption='Favorite' />
                    <TB.MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
                    <TB.MenuDivider />
                    <TB.MenuItem value='signout' icon='delete' caption='Delete' disabled />
                  </TB.IconMenu>
            </div>
        );
    }
};

const renderRoute = () => {
    // <IndexRoute component={MyComponents.SignIn} />
    return (
        <Router>
            <Route path="/">
                <IndexRoute component={App} />
                
                <Route path="main" component={MyComponents.Main} />
                <Route path="bet-list" component={MyComponents.BetList} />
                <Route path="bet-bill" componet={MyComponents.BetBill} />
            </Route>
        </Router>
    );
};

ReactDOM.render((
    renderRoute() 
), document.getElementById('app'));