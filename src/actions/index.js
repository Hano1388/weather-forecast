import axios from 'axios';

const API_KEY = '9481507664c0d0ac5c5b7a3bf965a374';
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

import { FETCH_WEATHER } from './types';


export function fetchWeather(city) {
  const url = `${BASE_URL}&q=${city},us`;
  const response = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: response
  };
};
