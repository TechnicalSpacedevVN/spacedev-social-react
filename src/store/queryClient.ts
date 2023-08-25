import { QueryClient, useQuery } from "@tanstack/react-query";
import { userStorage } from "../utils/createStorage";

export const POPUP_LOGIN = "POPUP_LOGIN";
export const USER_LOGIN = "USER_LOGIN";

export interface GlobalState {
  [POPUP_LOGIN]: boolean;
  [USER_LOGIN]?: User;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const setGloablState = <T extends keyof GlobalState>(
  name: T,
  value: Required<GlobalState>[T]
) => {
  queryClient.setQueryData([name], value);
  // queryClient.invalidateQueries([name]);
};

export const getGlobalState = <T extends keyof GlobalState>(
  name: T
): GlobalState[T] => {
  return queryClient.getQueryData([name]) as GlobalState[T];
};

export const removeGlobalState = <T extends keyof GlobalState>(name: T) => {
  queryClient.setQueryData([name], null);
  // queryClient.invalidateQueries([name]);
};

export const useGlobalState = <T extends keyof GlobalState>(
  name: T,
  defaultValue?: any
): GlobalState[T] => {
  let { data } = useQuery({
    queryKey: [name],
    queryFn: () => {
      let value = getGlobalState(name);
      if (typeof value !== "undefined") return value;

      if (typeof defaultValue !== "undefined") return defaultValue;

      return null;
    },
  });
  return data as GlobalState[T];
};

setGloablState(POPUP_LOGIN, false);
setGloablState(USER_LOGIN, userStorage.get());
