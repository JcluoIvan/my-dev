import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import { ActionType, StoreEvent } from '../constants/AppConstants';


let storage = {
    message: '',
};



const AppStore = Object.assign({}, EventEmitter.prototype, {

    getDemoMessage () {
        return storage.message;
    },



    dispatcherIndex: AppDispatcher.register(function(data) {
        switch (data.actionType) {
            case ActionType.DEMO:
                storage.message = data.message;
                AppStore.emit(StoreEvent.ON_DEMO);
                break;
        }


    })

});

export default AppStore;