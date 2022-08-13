import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  NormalizedCacheObject,
} from "@apollo/client";
import apolloClient from "../config";

type userParms = {
  source: string;
  password: string;
};

export const GQL_USER_LOGIN = gql`
  query userLogin($source: String!, $password: String!) {
    login(source: $source, password: $password) {
      token
    }
  }
`;

export const userLogin = async (parms: userParms) => {
  console.log(parms);
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query({
    query: GQL_USER_LOGIN,
    variables: {
      source: parms.source,
      password: parms.password,
    } as userParms,
  });

  return response;
};
