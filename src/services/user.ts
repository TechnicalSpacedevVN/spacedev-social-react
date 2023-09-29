import { api } from '@constants/api';

export interface RegisterUserDto {
  password: string;
  email: string;
  name: string;
}

export const registerService = (user: RegisterUserDto) => {
  return api.post(`/user/register`, user);
};
