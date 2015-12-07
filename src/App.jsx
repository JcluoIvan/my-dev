import React from 'react';
import ReactDOM from 'react-dom';

const RT = require('react-toolbox');

import AppAction from './actions/AppAction';
import AppStore from './stores/AppStore';
import { StoreEvent } from './constants/AppConstants';

let methods = {

};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    componentDidMount() {
        methods.handlerDemo = this.handlerDemo.bind(this);
        AppStore.on(StoreEvent.ON_DEMO, methods.handlerDemo);

    }

    componentWillUnmount() {
        AppStore.removeListener(StoreEvent.ON_DEMO, methods.handlerDemo);
    }

    handlerDemo () {

        let message = AppStore.getDemoMessage();
        this.setState({message});
    }

    onMessageChange (value) {
        AppAction.demo(value);

    }    

    render () {
        return (
            <div>
                <RT.IconMenu icon='more_vert' position='top-left' menuRipple>
                    <RT.MenuItem value='download' icon='get_app' caption='Download' />
                    <RT.MenuItem value='help' icon='favorite' caption='Favorite' />
                    <RT.MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
                    <RT.MenuDivider />
                    <RT.MenuItem value='signout' icon='delete' caption='Delete' disabled />
                </RT.IconMenu>

                <p> <label> Message : </label> {this.state.message} </p>
                <RT.Input 
                    type="text" 
                    label="Message" 
                    onChange={this.onMessageChange}
                    value={this.state.message} />
            </div>
        );
    }

};






ReactDOM.render((

    <App />

), document.getElementById('app'));