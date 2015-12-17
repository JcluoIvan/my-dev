function EventListener(Component) {
    return class EventListener extends Component {
        constructor (props) {
            super(props);
            this._el = { 
                stores: [ ]
            }
        }
        componentWillUnmount () {
            let { stores } = this._el;
            stores.forEach(({store, callbacks}, i) => {
                callbacks.forEach(({event_name, callback}, j) => {
                    store.removeListener(event_name, callback);
                });
            });
            console.log('unmount');
        }
        watch (store, event_name, callback) {
            let storeIndex = null;
            let { stores } = this._el;
            stores.forEach((o, i) => {
                if (o.store === store) {
                    storeIndex = i;
                }
            });
            if (storeIndex === null) {
                storeIndex = stores.length;
                stores.push({
                    store,
                    callbacks: []
                });
            }
            store.on(event_name, callback);
            stores[storeIndex].callbacks.push({
                event_name,
                callback
            });
        }
    }
};
export default EventListener;
// var EventListener = function (store) {

//     let storage = this.storage = {
//         store,
//         callbacks: []
//     }

// }

// EventListener.prototype.on = function (key, callback) {
//     this.storage.callbacks.push({key, callback});
//     this.storage.store.on(key, callback);
// }

// EventListener.prototype.removeAll = function () {
//     let { store, callbacks } = this.storage
//     callbacks.forEach(o => {
//         store.removeListener(o.key, o.callback);
//     });
// }

// export default EventListener;