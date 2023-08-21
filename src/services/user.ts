import { graphql } from "../gql";

export const GET_USER = graphql(`
  query GetUser {
    users(q: "Vương") {
      ...User
    }
  }
`);
