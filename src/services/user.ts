import { api } from '@constants/api';

export interface RegisterUserDto {
  password: string;
  email: string;
  name: string;
}

export const registerService = (user: RegisterUserDto) => {
  return api.post<UserRegisterResponse>(`/user/register`, user);
};

export const getUserService = () => {
  return api.get<UserGetInfoRes>('/user');
};

export const updateProfileService = (user: Partial<IUser>) => {
  return api.put(`/user`, user);
};
