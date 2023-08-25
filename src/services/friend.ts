import { gql } from "@apollo/client";
import { api, client } from "../constants/api";

export const friendService = {
  addFriend(userId: string) {
    return api.post<Friend>("/friend/add-friend", { receiverId: userId });
  },
  cancelFriendRequest(userId: string) {
    return api.post<Friend>(`/friend/cancel-friend-request/${userId}`);
  },
  confirm(userId: string) {
    return api.post(`/friend/confirm/${userId}`);
  },
  async getUserFriend(userId?: string) {
    let res = await client.query<{ friends: Friend[] }>({
      fetchPolicy: "no-cache",
      query: gql`
        query GetFriend($user: String) {
          friends(user: $user) {
            receiver {
              _id
              avatar
              email
              name
              nickname
            }
            sender {
              _id
              avatar
              email
              name
              nickname
            }
          }
        }
      `,
      variables: {
        user: userId,
      },
    });
    return res.data.friends;
  },

  async suggesedFriend() {
    let res = await client.query<{ suggestionUser: User[] }>({
      query: gql`
        query {
          suggestionUser {
            _id
            name
            cover
            nickname
            distance
          }
        }
      `,
    });

    return res.data.suggestionUser;
  },
};
