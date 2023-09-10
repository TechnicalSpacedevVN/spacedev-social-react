import { uniqueId } from "lodash";

export const convertImageUrlToFile = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], `${uniqueId()}.${blob.type}`, {
    type: blob.type,
  });
  return file;
};
