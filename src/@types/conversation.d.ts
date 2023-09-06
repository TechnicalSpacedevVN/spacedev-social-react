interface Conversation {
  _id: string;
  users: User[];
  messages: Message[];
  isGroup?: boolean;
  name?: string;
  groupCover?: string;
}
