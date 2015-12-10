import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const transitionActions = [
    {name: 'instant', enter: 100, leave: 100},
    {name: 'show-from-left', enter: 250, leave: 250},
    {name: 'show-from-right', enter: 250, leave: 250},
];
const getTransitionAction = function(transition) {
    return transitionActions
        .filter(a => a.name === transition)[0] || transitionActions[0];
};

/* component 切換 */
class StaticContainer extends React.Component {
    shouldComponentUpdate(nextProps: Object) : boolean {
        return !!nextProps.shouldUpdate;
    }
    render () {
        var { children } = this.props;
        return (children) ? React.Children.only(children) : null;
    }
}

class RouteCSSTransitionGroup extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            previousPathname: null,
            action: getTransitionAction(),
        }
    }

    getChildContext () {
        let self = this;
        return {
            /* 轉頁動畫 */
            transitionTo (path, transition) {
                let [url, args = null] = path.split('?');
                let query = {};
                (args ? args.split('&') : []).forEach(str => {
                    let [key, value] = str.split('=');
                    query[key] = value;
                });
                query['transition'] = transition;
                path = url + '?' + (Object.keys(query).map(key => {
                    return `${key}=${query[key]}`;
                }).join('&'));

                this.history.push(path);
            }
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextContext.location.pathname !== this.context.location.pathname) {
            let transition = nextContext.location.query.transition || null;
            let action = getTransitionAction(transition);
            this.setState({ 
                previousPathname: this.context.location.pathname,
                action
            })
        }
    }
    componentDidUpdate() {
        if (this.state.previousPathname) {
            this.setState({ previousPathname: null})
        }
    }
    
    render() {
        const { children, ...props } = this.props;
        const { previousPathname, action } = this.state;
        // {...props}
        return (
            <div id="router-transition">
                <ReactCSSTransitionGroup 
                    transitionName={action.name}
                    transitionEnterTimeout={action.enter}
                    transitionLeaveTimeout={action.leave}>
                    <StaticContainer
                        key={previousPathname || this.context.location.pathname}
                        shouldUpdate={! previousPathname}>
                        {children}
                    </StaticContainer>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
    
}
RouteCSSTransitionGroup.contextTypes = {
    location: React.PropTypes.object,
};
RouteCSSTransitionGroup.childContextTypes = {
    transitionTo: React.PropTypes.func
};

export default RouteCSSTransitionGroup;