import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import apolloClient from "../config";
import { GQL_USER_LOGIN } from "../queries";

type userParams = {
  source: string;
  password: string;
};

export const userLogin = async (params: userParams) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query({
    query: GQL_USER_LOGIN,
    variables: {
      source: params.source,
      password: params.password,
    } as userParams,
  });
  return response;
};
