import { gql } from "@apollo/client";
import { api, client } from "../constants/api";

export const userService = {
  getUser: async () => {
    // return api.get<User>("/user");

    let res = await client.query({
      query: gql`
        query Profile {
          profile {
            avatar
            name
          }
        }
      `,
    });

    return res.data.profile;
  },
};
