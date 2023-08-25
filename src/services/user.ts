import { gql } from "@apollo/client";
import { api, client } from "../constants/api";

export interface RegisterInput {
  email: string;
  password: string;
  name: string;
}

export interface VerifyRegisterInput {
  email: string;
  code: string;
}

export const userService = {
  getUser: async () => {
    // return api.get<User>("/user");

    let res = await client.query<{ profile: User }>({
      query: gql`
        query Profile {
          profile {
            avatar
            name
            email
            _id
            nickname
            cover
            hideFriendList
          }
        }
      `,
    });
    return res.data.profile;
  },

  register: async (body: RegisterInput) => {
    return api.post<User>("/user/register", body);
  },

  verify: async (body: VerifyRegisterInput) => {
    return api.post("/user/verify-register", body);
  },

  search: async (q: string) => {
    let res = await client.query<{ users: User[] }>({
      query: gql`
        query SearchUser($q: String!) {
          users(q: $q) {
            name
            _id
            avatar
          }
        }
      `,
      variables: {
        q,
      },
    });
    return res.data.users;
  },
};