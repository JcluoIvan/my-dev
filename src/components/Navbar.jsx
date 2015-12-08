
import React from 'react';
import { PropTypes } from 'react-router';


class Navbar extends React.Component {


    render () {
        return (
            <div >
                Navbar
            </div>
        );
    }
}

Navbar.contextTypes = { history: PropTypes.history }
export default Navbar;