import axios, {AxiosResponse, AxiosError} from 'axios';
import {BASE_URL} from '../../config';

export const ApiService = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer abf038b312fca2fc08cad87a1522d73a',
    'x-api-token': 'htug9ji0oqpr329442u891q3sdasw',
    // sensitive: true,
  },
  baseURL: BASE_URL,
});

ApiService.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('------RESPONSE-----', response);
    return response.data;
  },
  (error: AxiosError) => {
    console.log('-----RESPONSE ERROR-------');
    console.log(error);
  },
);

ApiService.interceptors.request.use(
  function (config) {
    console.log('------REQUEST-------', config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.log('------REQUEST ERROR-------', error);
    // Do something with request error
    return Promise.reject(error);
  },
);
