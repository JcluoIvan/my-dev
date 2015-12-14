
import React from 'react';

var BS = require('react-bootstrap')
var TB = require('react-toolbox');

class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {label: props.label}
    }

    componentWillReceiveProps(nexrProps) {
        this.setState({
            label: nexrProps.label
        })
    }

    onBack() {
        if (this.props.back) this.props.back();
    }

    render () {
        return (
            <div id="Component-Navbar">
                <BS.Navbar inverse>
                    <BS.Navbar.Header>
                        <BS.Navbar.Brand>
                            <TB.FontIcon value="arrow_back" onClick={this.onBack.bind(this)}/>
                        </BS.Navbar.Brand>
                        <BS.Navbar.Toggle />
                        <BS.Navbar.Text style={{textAlign: 'center'}}>
                            {this.state.label}
                        </BS.Navbar.Text>
                    </BS.Navbar.Header>
                    <BS.Navbar.Collapse>
                        <BS.Nav>
                            <BS.NavItem eventKey={1} href="/bet-list">Link</BS.NavItem>
                            <BS.NavItem eventKey={2} href="/bet-bill">Link</BS.NavItem>
                            <BS.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <BS.MenuItem eventKey={3.1}>Action</BS.MenuItem>
                                <BS.MenuItem eventKey={3.2}>Another action</BS.MenuItem>
                                <BS.MenuItem eventKey={3.3}>Something else here</BS.MenuItem>
                                <BS.MenuItem divider />
                                <BS.MenuItem eventKey={3.3}>Separated link</BS.MenuItem>
                            </BS.NavDropdown>
                        </BS.Nav>
                        <BS.Nav pullRight>
                            <BS.NavItem eventKey={1} href="#">Link Right</BS.NavItem>
                            <BS.NavItem eventKey={2} href="#">Link Right</BS.NavItem>
                        </BS.Nav>
                    </BS.Navbar.Collapse>
                </BS.Navbar>
            </div>
        );
    }
}
Navbar.propTypes = {
    label: React.PropTypes.string,
    onBack: React.PropTypes.func,
};

export default Navbar;