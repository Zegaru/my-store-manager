import axios from 'axios';
import Cookies from 'js-cookie';
import {API_URL} from './constants';

const instance = axios.create();

instance.interceptors.request.use(
  function (config: any) {
    config.headers['authorization'] = Cookies.get('token') || '';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (!Cookies.get('token')) return Promise.reject(error);

      try {
        const result = await axios.post(
          `${API_URL}/user/token`,
          {
            refreshToken: Cookies.get('refreshToken'),
          },
          {
            headers: {
              authorization: Cookies.get('token') || '',
            },
          }
        );

        Cookies.set('token', result.data.token);
        Cookies.set('refreshToken', result.data.refreshToken);

        if (error.config.data) error.config.data = JSON.parse(error.config.data);
        error.config.headers['authorization'] = result.data.token;

        return instance.request(error.config);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
