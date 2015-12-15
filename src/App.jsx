import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const BS = require('react-bootstrap');
const TB = require('react-toolbox');


/* components */
    import MyComponents from './components'
    import { Container } from './components/commons';

/* style */
    import './asset/style'; 


const iconTabs = [
    {icon: 'description', path: '/'    , label: '登入' },
    {icon: 'view_list'  , path: '/main'  , label: '首頁' },
    {icon: 'people'     , path: '/bet-list'  , label: '下注清單' },
    {icon: 'settings'   , path: '/bet-bill'   , label: '下注設定' }
];

const views = [
    {path: '/', component: MyComponents.SignIn},
    {path: '/main', component: MyComponents.Main},
    {path: '/bet-list', component: MyComponents.BetList},
    {path: '/bet-bill', component: MyComponents.BetBill},

];

const transitionActions = [
    {name: 'instant', enter: 100, leave: 100},
    {name: 'show-from-left', enter: 250, leave: 250},
    {name: 'show-from-right', enter: 250, leave: 250},
];

const getTransitionAction = function(transition) {
    return transitionActions
        .filter(a => a.name === transition)[0] || transitionActions[0];
};


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            tabIndex: 0 ,
            path: iconTabs[0].path,
            transitionName: 'show-from-right',
        };
    }

    onPageSelected (path) {
        this.context.history.push(path);
    }

    onTabChange (index) {
        let tab = iconTabs[index];
        this.setState({
            tabIndex: index,
            path: tab.path,
        });
    }

    renderIcon (icon, label) {
        return (
            <span className="tab-label">
                <div className="material-icons">{icon}</div>
                <label className="icon-text"> {label} </label>
            </span>
        )
    }

    getChildContext () {
        return {
            transitionTo: this.transitionTo.bind(this)
        }
    }

    transitionTo (path, args) {
        let index = this.state.tabIndex;

        iconTabs.map((tab, i) => {
            if (tab.path === path)
                index = i;
        });

        this.setState({
            tabIndex: index,
            path,
            transitionName: args.transition,
            // viewProps: args.viewProps || {},
        });
    }


    render () {
        let { tabIndex, transitionName } = this.state;
        let action = getTransitionAction(transitionName);

        return (
            <Container>
                <MyComponents.Navbar label={this.state.label} />
                <div id="Component-App">
                    <div className="Component-ViewManager">
                        <ReactCSSTransitionGroup 
                            transitionName={action.name}
                            transitionEnterTimeout={action.enter}
                            transitionLeaveTimeout={action.leave}>
                            {views.map( o => {
                                return o.path === this.state.path ? (
                                    <o.component key={o.path} />
                                ) : null;
                            })}
                        </ReactCSSTransitionGroup>
                    </div>
                    <footer>
                        <TB.Tabs 
                            className="footer-tabs"
                            index={tabIndex} 
                            onChange={this.onTabChange.bind(this)}>
                            {iconTabs.map((tab, i) => {
                                let active = i === tabIndex ? 'active' : '';
                                return (
                                    <TB.Tab key={i} 
                                        className={"footer-tab-item " + active} 
                                        label={this.renderIcon(tab.icon, tab.label)} />
                                );
                            })}
                        </TB.Tabs>
                    </footer>
                </div>
            </Container>
        );
        // return (
        //     <div>
        //         <BS.Nav bsStyle="tabs" activeKey={1} onSelect={this.onPageSelected.bind(this)}>
        //             <BS.NavItem eventKey="/"> SignIn </BS.NavItem>
        //             <BS.NavItem eventKey="/main"> Main </BS.NavItem>
        //             <BS.NavItem eventKey="/bet-list"> BetList </BS.NavItem>
        //             <BS.NavItem eventKey="/bet-bill"> BetBill </BS.NavItem>
        //             <BS.NavItem eventKey="/signin"> SignIn </BS.NavItem>
        //         </BS.Nav>
        //         <MyComponents.RouteCSSTransitionGroup>
        //             {this.props.children}
        //         </MyComponents.RouteCSSTransitionGroup>
        //     </div>
        // );
    }
};

App.childContextTypes = {
    transitionTo: React.PropTypes.func
};

// const renderRoute = () => {\
//     return (
//         <Router history={history}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={MyComponents.SignIn}/>
//                 <Route path="main" component={MyComponents.Main} />
//                 <Route path="bet-list" component={MyComponents.BetList} />
//                 <Route path="bet-bill" componet={MyComponents.BetBill} />
//             </Route>
//         </Router>
//     );
// };

ReactDOM.render((
    <App /> 
), document.getElementById('app'));