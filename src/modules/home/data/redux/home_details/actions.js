import actionTypes from '../action_types';
import * as API from '../../../../../data/config/api';

export function getHomePageDetails(data) {
    return function (dispatch) {
        API.getHomePageDetails(data, (err, response) => {
            if (!err) {
                dispatch({
                    type: actionTypes.UPDATE_HOME_PAGE_DETAILS,
                    payload: response
                });
            } else {
                dispatch({
                    type: actionTypes.HOME_PAGE_ERROR
                });
            }
        });
    };
}



