import {
  USER_DATA,
  clearGlobalState,
  useGLobalState,
} from '@store/queryClient';
import { FC, createContext, useCallback, useContext, useMemo } from 'react';

export interface LoginForm {
  username: string;
  password: string;
}

export interface AuthProviderProps {
  user: IUser | undefined;
  login: (form: LoginForm) => void;
  logout: () => void;
  isLogin: boolean;
}

const Context = createContext({} as AuthProviderProps);
export const AuthProvider: FC<{ children: any }> = (props) => {
  const user = useGLobalState(USER_DATA);

  const login = useCallback<AuthProviderProps['login']>(() => {
    // setUser({
    //   name: "Đặng Thuyền Vương",
    // });
  }, []);

  const logout = useCallback<AuthProviderProps['logout']>(() => {
    clearGlobalState(USER_DATA);
    // Modal.confirm({
    //   title: "Bạn có muốn đăng xuất khỏi tài khoản?",
    //   onOk: () => {
    //     setUser(null);
    //   },
    // });
  }, []);

  const value = useMemo<AuthProviderProps>(() => {
    return {
      user,
      isLogin: !!user,
      login,
      logout,
    };
  }, [user, login, logout]);

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);
