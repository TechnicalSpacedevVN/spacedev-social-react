import { ClientEvent, ServerEvent } from '@constants/event';
import { setUser } from '@hooks/useUser';
import { CONVERSATION_GROUP, setGloablState } from '@store/queryClient';
import io from 'socket.io-client';

export const socket = io('http://localhost:8000');

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on(ClientEvent.UpdateUser, (user: User) => {
  setUser(user);
});

export const loginSocket = (user: User) => {
  socket.emit(ServerEvent.Login, user._id, () => {
    socket.emit(
      ServerEvent.ConversationGroup,
      (conversations: Conversation[]) => {
        console.log('ServerEvent.ConversationGroup', conversations);
        setGloablState(CONVERSATION_GROUP, conversations);
      },
    );
  });
};
