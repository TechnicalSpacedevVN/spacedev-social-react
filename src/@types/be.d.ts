interface Response<T> {
  data: T;
  message: string;
}

interface ResponseError {
  message: string;
}
