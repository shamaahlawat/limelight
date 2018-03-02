import actionTypes from '../action_types';
import states from './states';

export default function user_details(state = states, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER_DETAILS:
            return {
                ...state,
            };
        default:
            return state;
    }
}