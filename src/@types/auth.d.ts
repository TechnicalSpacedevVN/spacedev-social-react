interface AuthLoginResponseData {
  accessToken: string;
  refreshToken;
}

interface AuthLoginResponse extends Response<AuthLoginResponseData> {}

type AuthRefreshTokenResponse = AuthLoginResponse;
