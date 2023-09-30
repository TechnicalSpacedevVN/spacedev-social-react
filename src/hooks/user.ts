import { updateProfileService } from '@services/user';
import { USER_DATA, updateGlobalState } from '@store/queryClient';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProfile = () => {
  let { mutateAsync, ...res } = useMutation({
    mutationFn: async (user: Partial<IUser>) => {
      await updateProfileService(user);
      updateGlobalState(USER_DATA, user);
    },
  });
  return { ...res, updateProfileAction: mutateAsync };
};
