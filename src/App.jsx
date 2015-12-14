import React from 'react';
import ReactDOM from 'react-dom';
const BS = require('react-bootstrap');
const TB = require('react-toolbox');


/* components */
    import MyComponents from './components'
    import {ViewManager, View, Container} from './components/commons';

/* style */
    import './asset/style'; 


const iconTabs = [
    {icon: 'description', path: '/'    , label: '登入' },
    {icon: 'view_list'  , path: '/main'  , label: '首頁' },
    {icon: 'people'     , path: '/bet-list'  , label: '下注清單' },
    {icon: 'settings'   , path: '/bet-bill'   , label: '下注設定' }
];


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0 ,
            path: iconTabs[0].path
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


    render () {
        let { tabIndex } = this.state;
        return (
            <Container>
                <MyComponents.Navbar label={this.state.label} />
                <div id="Component-App">
                    <ViewManager ref="tabs" name="tabs" 
                        defaultView={this.state.path} 
                        transition="show-from-right">

                        <View name="/" component={MyComponents.SignIn} />
                        <View name="/main" component={MyComponents.Main} />
                        <View name="/bet-list" component={MyComponents.BetList} />
                        <View name="/bet-bill" component={MyComponents.BetBill} />


                    </ViewManager>
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