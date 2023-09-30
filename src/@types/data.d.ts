interface IPost {}
interface IUser {
  name: string;
  email: string;
  avatar: string;
}
interface IMedia {}
interface IEmoji {}
interface IGif {}
interface IConversation {}
interface IMessage {}
interface IComment {}
interface IStory {}
interface ISetting {}
interface IFile {
  _id: string;
  author: string;
  fileName: string;
  mimeType: string;
  orginalName: string;
  size: number;
  urlPublic: string;
}
interface IOrganization {
  _id: string;
  name: string;
  description: string;
  logo?: string;
  domain?: string;
}
