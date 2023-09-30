import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchUser } from './page';
import { userStorage } from '@utils';
import _ from 'lodash';

export const LOGIN_MODAL = 'LOGIN_MODAL';
export const USER_DATA = 'USER_DATA';
export const ORG_SELECT = 'ORG_SELECT';
export const ORGS = 'ORGS';

export interface IGlobalState {
  [LOGIN_MODAL]: boolean;
  [USER_DATA]?: IUser;
  [ORG_SELECT]?: IOrganization;
  [ORGS]: IOrganization[];
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: import.meta.env.NODE_ENV === 'production',
      refetchOnWindowFocus: false,
    },
  },
});

export const setGlobalState = <T extends keyof IGlobalState>(
  name: T,
  value: Required<IGlobalState>[T],
) => {
  queryClient.setQueryData([name], value);
  queryClient.invalidateQueries([name]);
};

export const updateGlobalState = <T extends keyof IGlobalState>(
  name: T,
  value: Partial<Required<IGlobalState>[T]>,
) => {
  let data = getGlobalState(name);
  data = _.clone(data);
  if (typeof data === 'object') {
    Object.assign(data, value);
  }
  setGlobalState(name, data as any);
};

export const getGlobalState = <T extends keyof IGlobalState>(
  name: T,
): IGlobalState[T] => {
  return queryClient.getQueryData([name]) as IGlobalState[T];
};

export const clearGlobalState = <T extends keyof IGlobalState>(name: T) => {
  queryClient.setQueryData([name], null);
  queryClient.invalidateQueries([name]);
};

export const useGLobalState = <T extends keyof IGlobalState>(
  name: T,
  defaultValue?: IGlobalState[T],
): IGlobalState[T] => {
  const { data } = useQuery({
    queryKey: [name],
    initialData: defaultValue,
    queryFn: () => {
      const value = getGlobalState(name);

      if (typeof value !== 'undefined') return value;

      if (typeof defaultValue !== 'undefined') return defaultValue;
      return null;
    },
  });
  return data as IGlobalState[T];
};

setGlobalState(LOGIN_MODAL, false);
setGlobalState(USER_DATA, userStorage.get() as IUser);
setGlobalState(ORGS, []);

fetchUser();
