import { loginService } from '@services/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({ mutationFn: loginService });
};
