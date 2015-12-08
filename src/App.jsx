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

import './asset/style';


let methods = {};

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <div>
                <BS.ListGroup>
                    <BS.ListGroupItem>
                        <Link to='/signin'> SignIn </Link>
                    </BS.ListGroupItem>
                    <BS.ListGroupItem>
                        <Link to='/main'> Main </Link>
                    </BS.ListGroupItem>
                    <BS.ListGroupItem>
                        <Link to='/bet-list'> BetList </Link>
                    </BS.ListGroupItem>
                    <BS.ListGroupItem>
                        <Link to='/bet-bill'> BetBill </Link>
                    </BS.ListGroupItem>
                </BS.ListGroup>
            </div>
        );
    }
};

const renderRoute = () => {
    return (
        <Router>
            <Route path="/">
                <IndexRoute component={App} />
                <Route path="signin" component={MyComponents.SignIn} />
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