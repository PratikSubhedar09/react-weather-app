import ajaxProxy from '../ajaxProxy';

export const GET_CITY_WEATHER_PENDING = 'getCityWeather_PENDING';
export const GET_CITY_WEATHER_FULLFILLED = 'getCityWeather_FULFILLED';
export const GET_CITY_WEATHER_REJECTED = 'getCityWeather_REJECTED';

export default function getCityWeather(queryParams) {
    return (dispatch) => {
        dispatch(getCityWeatherPending());
        ajaxProxy
            .getCityWeather(queryParams)
            .then((data) => {
                dispatch(getCityWeatherFulfilled(data));
            })
            .catch(() => dispatch(getCityWeatherRejected()));
      };
}

function getCityWeatherPending() {
    return {
      type: GET_CITY_WEATHER_PENDING,
      payload: {},
    };
  }
  
  function getCityWeatherFulfilled(data) {
    return {
      type: GET_CITY_WEATHER_FULLFILLED,
      payload: data,
    };
  }
  
  function getCityWeatherRejected() {
    return {
      type: GET_CITY_WEATHER_REJECTED,
      payload: {},
    };
  }
  