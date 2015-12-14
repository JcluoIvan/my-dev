import React from 'react';


export default class Container extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            scrollable: (!! props.scrollable),
        }

    }

    render () {

        let scrollable = this.state.scrollable ? 'scrollable' : '';

        return (
            <div className={`Componet-Container ${scrollable}`}>
                {this.props.children}
            </div>
        );
    }


};

Container.propTypes = {
    scrollable: React.PropTypes.bool,
}
