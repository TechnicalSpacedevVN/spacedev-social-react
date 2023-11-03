import { refreshTokenService } from '@services/auth';
import { tokenStorage } from '@utils';
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  // withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});

let promise: Promise<any> | null = null;

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    console.log(error);
    if (error.code === 'ERR_NETWORK') {
      console.log('URL hoặc intenet của bạn có vấn đề');
      throw { message: 'URL hoặc intenet của bạn có vấn đề' };
    }
    if (error.response.data?.message === 'jwt expired') {
      if (promise) {
        await promise;
      } else {
        const token = tokenStorage.get();
        if (token) {
          promise = refreshTokenService(token.refreshToken);
          const data = await promise;
          tokenStorage.set(data.data.data);
        }
      }

      return api(error.config);
    }

    throw error.response.data;
  },
);
