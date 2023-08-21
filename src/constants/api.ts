import axios from "axios";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";
import { token } from "../utils/createStorage";

axios.defaults.baseURL = import.meta.env.VITE_API;
// export const api = axios.create({
//   baseURL: import.meta.env.VITE_API,
// });

axios.interceptors.request.use((config) => {
  if (token.get()) {
    config.headers.Authorization = `Bearr ${token.get()}`;
  }

  return config;
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {}
);

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API,
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(gql`
      fragment User on User {
        avatar
        name
        _id
      }
    `),
  }),
});
