
  import {
    GET_CITY_WEATHER_PENDING,
    GET_CITY_WEATHER_FULLFILLED,
    GET_CITY_WEATHER_REJECTED,
  } from '../actions/getCityWeather';
  
  
  const INITIAL_STATE = {
    getCityWeather: '',
  };
  
  export default function appStatuses(state = INITIAL_STATE, { type }) {
    switch (type) {
      case GET_CITY_WEATHER_PENDING:
        return {
          ...state,
          getCityWeather: 'PENDING',
        };
  
      case GET_CITY_WEATHER_FULLFILLED:
        return {
          ...state,
          getCityWeather: '',
        };
  
      case GET_CITY_WEATHER_REJECTED:
        return {
          ...state,
          getCityWeather: 'REJECTED',
        };
      default:
        return state;
    }
  }
  