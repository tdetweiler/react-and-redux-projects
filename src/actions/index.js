import axios from 'axios';

const API_KEY = 'b721cf1ea88f2b09a81e400c71f5b4ef';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}