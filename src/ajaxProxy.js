import axios from 'axios';
import config from './config';

export default {
    getCityWeather: (queryParams) => {
        return getAxiosInstance()
            .get(`/api/weather?${queryParams}`)
            .then(reponse => reponse.data)
    }
}

export function getAxiosInstance(axiosConfig) {
    return axios.create({
      baseURL: config.apiContextPath,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      ...axiosConfig,
    });
}