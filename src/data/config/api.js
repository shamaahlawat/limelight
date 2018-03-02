import axios from 'axios';

import * as CONSTANTS from './constants';

const method_types = {
    get: "GET",
    post: "POST"
};

function getHeaders() {
    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    let headers = {
        'Content-Type': 'application/json'
    };
    if (user && (user.uid || user._id) && user.hash) {
        headers.uid = user.uid || user._id;
        headers.hash = user.hash;
    }
    return headers;
}

function fetchDataAndProceed(url, method, data, callback) {
    axios({
        method: method,
        params: method === 'GET' ? data : {},
        data: method !== 'GET' ? data : {},
        url: url,
        baseURL: CONSTANTS.base_url,
        headers: getHeaders(),
        validateStatus: function (status) {
            return ((status >= 200 && status < 300) || status === 412 || status === 401 || status === 403);
        },
    }).then(function (response) {
        if (response.status === 401 || response.status === 403) {
            localStorage.setItem('user', null);
            response.data.status = response.status;
            callback(true, response.data);
        }
        else {
            callback(false, response.data);
        }
    }).catch(function (error) {
        callback(true, { error });
    });
}

// ----CONTACT INFO API ---
export const submitContactDetails = (data, callback) => {
    fetchDataAndProceed('/enquiries.json', method_types.post, data, callback);
};

export const getTestimonialsDetails = (data, callback) => {
    fetchDataAndProceed('/testimonials.json', method_types.get, data, callback);
};

export const getHomePageDetails = (data, callback) => {
    fetchDataAndProceed('/home', method_types.get, data, callback);
};

export const getEventsDetails = (data, callback) => {
    fetchDataAndProceed('/events.json', method_types.get, data, callback);
};

export const getServicesDetails = (data, callback) => {
    fetchDataAndProceed('/services', method_types.get, data, callback);
};

export const getEventsImages = (data, callback) => {
    fetchDataAndProceed('/images.json', method_types.get, data, callback);
};

export const updateCurrentEventDetails = (data, callback) => {
    fetchDataAndProceed('/events/' + data + '.json', method_types.get, data, callback);
};

export const submitOrderDetails = (data, callback) => {
    fetchDataAndProceed('/orders.json', method_types.post, data, callback);
};

export const submitUserDetails = (data, callback) => {
    fetchDataAndProceed('/users/auth/facebook/callback.json', method_types.post, data, callback);
};
