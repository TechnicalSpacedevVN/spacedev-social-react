import { api } from '@constants/api';

export const uploadFileService = (files: File[]) => {
  let formData = new FormData();
  files.forEach((f) => formData.append('files[]', f));
  return api.post<UploadFileResponse>('/file', formData);
};
