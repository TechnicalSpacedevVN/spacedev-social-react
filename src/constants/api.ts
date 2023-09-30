import { refreshTokenService } from '@services/auth';
import { tokenStorage } from '@utils';
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  // withCredentials: true,
});

api.interceptors.request.use((config) => {
  let token = tokenStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});

let promise: Promise<any> | null = null;

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.data?.message === 'jwt expired') {
      if (promise) {
        await promise;
      } else {
        let token = tokenStorage.get();
        if (token) {
          promise = refreshTokenService(token.refreshToken);
          let data = await promise;
          tokenStorage.set(data.data.data);
        }
      }

      return api(error.config);
    }

    throw error.response.data;
  },
);
