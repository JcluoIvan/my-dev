import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import View from './View';

const transitionActions = [
    {name: 'instant', enter: 100, leave: 100},
    {name: 'show-from-left', enter: 250, leave: 250},
    {name: 'show-from-right', enter: 250, leave: 250},
];
const getTransitionAction = function(transition) {
    return transitionActions
        .filter(a => a.name === transition)[0] || transitionActions[0];
};


const newState = function(props) {
    let views = {};
    props.children.forEach(view => {
        views[view.props.name] = view;
    });
    return {
        views,
        name: props.name,
        activeView: props.defaultView,
        transition: props.transition || 'instant',
    };
}

class ViewNotFound extends React.Component {

    render () {
        return (
            <div> not found componet {this.props.name} </div>
        );
    }
}

class ViewManager extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = newState(props);
    }

    getChildContext () {
        return {
            transitionTo: this.transitionTo.bind(this)
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState(newState(nextProps));
    }

    transitionTo (name, args) {
        this.setState({
            activeView: name,
            transition: args.transition,
            viewProps: args.viewProps || {},
        })
    }

    render() {
        // {...props}
        // let view = this.state.views.filter(v => )
        let {views, activeView, viewProps, transition} = this.state;

        let view = views[activeView];

        let ViewComponent = view ? view.props.component : ViewNotFound;

        let action = getTransitionAction(transition);

        (this.props.onViewChange) && this.props.onViewChange(activeView);

        return (
            <div className="Component-ViewManager">
                <ReactCSSTransitionGroup 
                    transitionName={action.name}
                    transitionEnterTimeout={action.enter}
                    transitionLeaveTimeout={action.leave}>
                    <ViewComponent key={activeView} {...viewProps}/>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
    
}
// ViewManager.contextTypes = {
//     location: React.PropTypes.object,
// };
ViewManager.childContextTypes = {
    transitionTo: React.PropTypes.func
};
ViewManager.propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultView: React.PropTypes.string.isRequired,
    onViewChange: React.PropTypes.func,
    transition: React.PropTypes.string,
}
export default ViewManager;