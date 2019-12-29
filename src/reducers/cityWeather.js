import { GET_CITY_WEATHER_PENDING, GET_CITY_WEATHER_FULLFILLED, GET_CITY_WEATHER_REJECTED } from '../actions/getCityWeather';

const INITIAL_STATE = [];

export default function cityWeather(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CITY_WEATHER_PENDING: {
      return INITIAL_STATE;
    }

    case GET_CITY_WEATHER_FULLFILLED: {
        return [
          ...payload,
        ];
    }

    case GET_CITY_WEATHER_REJECTED: {
        return INITIAL_STATE;
    }

    default:
      return state;
  }
}
