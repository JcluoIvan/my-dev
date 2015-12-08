import Dispatcher from '../dispatcher/Dispatcher';
import {ActionType} from '../constants/AppConstants';





export default {

    demo (message) {
        Dispatcher.dispatch({
            actionType: ActionType.DEMO,
            message
        });
    }

};


