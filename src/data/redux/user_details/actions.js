import actionTypes from '../action_types';
import * as API from '../../../data/config/api';

export function submitUserDetails(data) {
    return function (dispatch) {
        API.submitUserDetails(data, (err, response) => {
            if (!err) {
                dispatch({
                    type: actionTypes.UPDATE_USER_DETAILS,
                    payload: response
                });
            }
        });
    };
}