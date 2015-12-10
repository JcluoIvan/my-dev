import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, PropTypes} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory'

const BS = require('react-bootstrap');

import MyComponents from './components'

import './asset/style'; 

const history = createHashHistory();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: '/' };
    }

    onPageSelected (path) {
        this.context.history.push(path);
    }

    render () {
        return (
            <div>
                <BS.Nav bsStyle="tabs" activeKey={1} onSelect={this.onPageSelected.bind(this)}>
                    <BS.NavItem eventKey="/"> SignIn </BS.NavItem>
                    <BS.NavItem eventKey="/main"> Main </BS.NavItem>
                    <BS.NavItem eventKey="/bet-list"> BetList </BS.NavItem>
                    <BS.NavItem eventKey="/bet-bill"> BetBill </BS.NavItem>
                    <BS.NavItem eventKey="/signin"> SignIn </BS.NavItem>
                </BS.Nav>
                <MyComponents.RouteCSSTransitionGroup>
                    {this.props.children}
                </MyComponents.RouteCSSTransitionGroup>
            </div>
        );
    }
};
App.contextTypes = { 
    history: PropTypes.history,
    transitionTo: React.PropTypes.func,
};

const renderRoute = () => {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MyComponents.SignIn}/>
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