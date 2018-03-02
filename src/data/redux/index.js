import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import page_details from './page_details/reducers';
// import user_details from './user_details/reducers';
// import contact_details from '../../modules/contact_us/data/redux/contact_details/reducers';
// import testimonials_details from '../../modules/students_speak/data/redux/testimonials_details/reducers';
// import home_page_details from '../../modules/home/data/redux/home_details/reducers';
// import events_details from '../../modules/events/data/redux/events_details/reducers';
// import services_details from '../../modules/services/data/redux/services_details/reducers';
// import selected_event_details from '../../components/yoga_events/data/redux/events_details/reducers';
// import order_details from '../../modules/event_details/data/redux/order_details/reducers';

const rootReducer = combineReducers({
    // user_details,
    // page_details,
    // contact_details,
    // testimonials_details,
    // home_page_details,
    // events_details,
    // services_details,
    // selected_event_details,
    // order_details,
    routing: routerReducer
});

export default rootReducer;
