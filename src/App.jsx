import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StaticContainer from 'react-static-container';
import {Router, Route, IndexRoute, PropTypes} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory'
const TB = require('react-toolbox');
const BS = require('react-bootstrap');

import MyComponents from './components'

import './asset/style'; 

const history = createHashHistory();
// const history = useBasename(createHistory)({
//     // basename: '/animations'
//     basename: false,
//     queryKey: false
// })


class RouteCSSTransitionGroup extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            previousPathname: null
        }
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextContext.location.pathname !== this.context.location.pathname) {
            this.setState({ previousPathname: this.context.location.pathname })
        }
    }
    
    render() {
        const { children, ...props } = this.props;
        const { previousPathname } = this.state;
        return (
            <ReactCSSTransitionGroup {...props}>
                <StaticContainer
                    key={previousPathname || this.context.location.pathname}
                    shouldUpdate={!previousPathname} >
                {children}
                </StaticContainer>
            </ReactCSSTransitionGroup>
        )
    }
    
    componentDidUpdate() {
        if (this.state.previousPathname) {
            this.setState({ previousPathname: null })
        }
    }
}
RouteCSSTransitionGroup.contextTypes = {
    location: React.PropTypes.object
};

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
                <div id="router-transition">
                    <RouteCSSTransitionGroup
                        component="div" 
                        transitionName="example"
                        transitionEnterTimeout={300} 
                        transitionLeaveTimeout={300}>
                        {this.props.children}
                    </RouteCSSTransitionGroup>
                </div>
            </div>
        );
    }
};
App.contextTypes = { history: PropTypes.history };


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