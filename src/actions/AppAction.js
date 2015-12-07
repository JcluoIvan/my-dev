import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionType} from '../constants/AppConstants';

export default {

    demo (message) {
        AppDispatcher.dispatch({
            actionType: ActionType.DEMO,
            message
        });
    }

};


