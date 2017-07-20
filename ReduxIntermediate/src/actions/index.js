import axios from 'axios';

const API_KEY = 'ea74566e9e9dfa98cada6bdc39dae32a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ru`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}