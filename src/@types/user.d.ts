interface User {
  _id: string;
  name: string;
  avatar?: string;
  email: string;
}

interface UserRegisterResponse extends Response<IUser> {}
interface UserGetInfoRes extends Response<IUser> {}
