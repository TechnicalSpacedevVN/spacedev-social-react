import { getUserService } from '@services/user';
import { tokenStorage, userStorage } from '@utils';
import { LOGIN_MODAL, USER_DATA, setGlobalState } from './queryClient';

export const closePopupLogin = () => {
  setGlobalState(LOGIN_MODAL, false);
};

export const fetchUser = async () => {
  let token = tokenStorage.get();
  if (token) {
    let user = await getUserService();
    let _user = {
      ...user.data.data,
      avatar: user.data.data.avatar || '/default-avatar.png',
    };
    setGlobalState(USER_DATA, _user);
    userStorage.set(_user);
  }
};
