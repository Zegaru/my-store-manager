import {NextRouter} from 'next/router';

import {IAuthContext} from '../contexts/Auth';
import axiosInstance from './axiosConfig';
import {API_URL} from './constants';

export default class GeneralApi {
  auth: IAuthContext;
  history: NextRouter;

  constructor(auth: IAuthContext, history: NextRouter) {
    this.auth = auth;
    this.history = history;
  }

  async get(apiPath: string, params: any = {}) {
    try {
      const result = await axiosInstance.get(`${API_URL}${apiPath}`, {
        params,
      });
      return {
        success: true,
        message: 'Request completed',
        data: result.data,
      };
    } catch (error: any) {
      if (error.response && error.response.status === 440) {
        this.auth.signout(() => this.history.replace('/'));
        return {
          success: false,
          message: 'Session finished',
        };
      }

      return {
        success: false,
        message: error.response != null ? error.response.data.error : 'Error inesperado',
      };
    }
  }

  async post(apiPath: string, data: any) {
    try {
      const result = await axiosInstance.post(`${API_URL}${apiPath}`, data);
      return {
        success: true,
        message: 'Request completed',
        data: result.data,
      };
    } catch (error: any) {
      if (error?.response?.status === 440) {
        this.auth.signout(() => this.history.replace('/'));
        return {
          success: false,
          message: 'Session finished',
        };
      }

      return {
        success: false,
        data: error.response != null ? error.response.data : {},
        status: error.response.status,
        message: error.response != null ? error.response.data.error : 'Error inesperado',
      };
    }
  }

  async put(apiPath: string, data: any) {
    try {
      const result = await axiosInstance.put(`${API_URL}${apiPath}`, data);
      return {
        success: true,
        message: 'Request completed',
        data: result.data,
      };
    } catch (error: any) {
      if (error?.response?.status === 440) {
        this.auth.signout(() => this.history.replace('/'));
        return {
          success: false,
          message: 'Session finished',
        };
      }

      return {
        success: false,
        message: error.response != null ? error.response.data.error : 'Error inesperado',
      };
    }
  }
}
