export const createStorage = <T = any>(name: string) => {
  return {
    set: (data: T) => {
      localStorage.setItem(name, JSON.stringify(data));
    },
    get: (): T | null => {
      try {
        return JSON.parse(localStorage.getItem(name) || 'null');
      } catch (err) {
        return null;
      }
    },
    clear: () => {
      localStorage.removeItem(name);
    },
  };
};

export const userStorage = createStorage<IUser>('user');
export const tokenStorage = createStorage<AuthLoginResponseData>('token');
export const orgStorage = createStorage<IOrganization[]>('org');
