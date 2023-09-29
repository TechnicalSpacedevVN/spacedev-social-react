import { api } from '@constants/api';

export interface LoginDto {
  email: string;
  password: string;
}

export const loginService = (body: LoginDto) => {
  return api.post('/auth/login', body);
};
