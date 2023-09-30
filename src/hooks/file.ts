import { uploadFileService } from '@services/file';
import { useMutation } from '@tanstack/react-query';

export const useUploadFile = () => {
  let { mutateAsync, ...res } = useMutation({
    mutationFn: uploadFileService,
  });

  return { ...res, uploadFileAction: mutateAsync };
};
