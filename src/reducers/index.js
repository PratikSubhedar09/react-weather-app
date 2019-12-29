import { combineReducers } from 'redux';

import cityWeather from './cityWeather';
import ajaxStatuses from './ajaxStatuses';

export default combineReducers({
    cityWeather,
    ajaxStatuses,
});
