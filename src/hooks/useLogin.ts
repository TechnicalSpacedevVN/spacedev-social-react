import { LoginDto, loginService } from '@services/auth';
import { getUserService } from '@services/user';
import {
  USER_DATA,
  clearGlobalState,
  setGlobalState,
} from '@store/queryClient';
import { useMutation } from '@tanstack/react-query';
import { tokenStorage, userStorage } from '@utils';

export const useLogin = () => {
  return useMutation<void, ResponseError, LoginDto>({
    mutationFn: async (body: LoginDto) => {
      let res = await loginService(body);
      tokenStorage.set(res.data.data);
      let {
        data: { data: user },
      } = await getUserService();

      setGlobalState(USER_DATA, {
        ...user,
        avatar: user.avatar || '/default-avatar.png',
      });
      userStorage.set({
        ...user,
        avatar: user.avatar || '/default-avatar.png',
      });
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      tokenStorage.clear();
      clearGlobalState(USER_DATA);
      userStorage.clear();
    },
  });
};
