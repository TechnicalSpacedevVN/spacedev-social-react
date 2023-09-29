import { registerService } from '@services/user';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  return useMutation({ mutationFn: registerService });
};
