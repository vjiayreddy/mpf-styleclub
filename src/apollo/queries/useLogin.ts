import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  NormalizedCacheObject,
} from "@apollo/client";
import apolloClient from "../config";

type userParams = {
  source: string;
  password: string;
};

export const GQL_USER_LOGIN = gql`
  query userLogin($source: String!, $password: String!) {
    login(source: $source, password: $password) {
      token
      user {
        isMobileVerified
      }
    }
  }
`;

export const userLogin = async (params: userParams) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query({
    query: GQL_USER_LOGIN,
    variables: {
      source: params.source,
      password: params.password,
    } as userParams,
  });


  console.log(response);

  return response;
};
