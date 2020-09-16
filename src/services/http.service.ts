import axios, {AxiosResponse} from 'axios';

export interface HttpResponse<T = any> extends AxiosResponse<T> {}

let jwtHeader = '';

axios.defaults.baseURL = `https://localhost/api`;

axios.interceptors.response.use(
  success => Promise.resolve(success),
  error => {
    const expectedError =
      error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      // logger service goes here
      console.log('Logging the error', error);
    }

    return Promise.reject(error);
  },
);

export const getHeaderAuthToken = () => jwtHeader;

export function setHeaderAuthToken(token: string) {
  jwtHeader = token;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axios.defaults.headers['Access-Control-Allow-Origin'] = `*`;

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};
