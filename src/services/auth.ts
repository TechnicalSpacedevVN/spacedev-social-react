import { api } from '@constants/api';

export interface LoginDto {
  email: string;
  password: string;
}

export const loginService = (body: LoginDto) => {
  return api.post<AuthLoginResponse>('/auth/login', body);
};

export const refreshTokenService = (refreshToken: string) => {
  return api.post<AuthRefreshTokenResponse>(`/auth/refresh-token`, {
    refreshToken,
  });
};
