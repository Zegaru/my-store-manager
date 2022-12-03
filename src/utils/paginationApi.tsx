import {NextRouter} from 'next/router';

import {IAuthContext} from '../contexts/Auth';
import axiosInstance from './axiosConfig';
import {API_URL} from './constants';

export default class PaginationApi {
  apiPath: string;
  fullPath: string;
  amountPerPage: number;
  auth: IAuthContext;
  history: NextRouter;

  constructor(apiPath: string, amountPerPage: number, auth: IAuthContext, history: NextRouter) {
    this.apiPath = apiPath;
    this.fullPath = `${API_URL}${apiPath}`;
    this.amountPerPage = amountPerPage;
    this.auth = auth;
    this.history = history;
  }

  async getContent(currentPage: number, filter: any) {
    try {
      const result = await axiosInstance.post(this.fullPath, {
        pagination: {
          page: currentPage,
          amount: this.amountPerPage,
        },
        filter,
      });
      return {
        success: true,
        message: 'Data fetched',
        data: result.data,
      };
    } catch (error: any) {
      if (error.response?.status === 440) {
        this.auth.signout(() => this.history.replace('/'));
        return {
          success: false,
          message: 'Session finished',
        };
      }

      return {
        success: false,
        message: error.response.data != null ? error.response.data.message : 'Unexpected error',
      };
    }
  }
}
