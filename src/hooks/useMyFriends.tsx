import { FRIENDS } from '@constants/queryKey';
import { friendService } from '@services/friend';
import { USER_LOGIN, useGlobalState } from '@store/queryClient';
import { useQuery } from '@tanstack/react-query';

export const useMyFriends = () => {
  const user = useGlobalState(USER_LOGIN);
  return useQuery({
    queryKey: [FRIENDS],
    queryFn: () => friendService.getUserFriend(user?._id),
  });
};
