
import React from 'react';
import { PropTypes } from 'react-router';


class Main extends React.Component {

    toSignIn () {
        this.context.history.push('/');
    }

    render () {
        return (
            <div >
                <button onClick={this.toSignIn.bind(this)}> sign out </button>
            </div>
        );
    }
}

Main.contextTypes = { history: PropTypes.history }
export default Main;