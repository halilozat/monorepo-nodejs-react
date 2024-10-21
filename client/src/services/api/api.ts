import axios from 'axios';
import * as Qs from 'qs';
import { ApiError, isApiErrorResponse } from './types';

const TIMEOUT = 20 * 1000;
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: TIMEOUT,
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'brackets' }),
});

api.interceptors.request.use(
  request => {
    return request;
  },

  err => Promise.reject(err),
);

api.interceptors.response.use(
  res => res,
  (err: any) => {

    const body = err?.response?.data;
    if (body && isApiErrorResponse(err.response)) {
      const apiError = new ApiError(body);

      return Promise.reject(apiError);
    }

    return Promise.reject(err);
  },
);

export default api;
