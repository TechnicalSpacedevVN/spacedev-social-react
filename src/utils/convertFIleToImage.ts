export const convertFileToImage = (file: File) => {
  return new Promise<string>((res) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      res(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  });
};
