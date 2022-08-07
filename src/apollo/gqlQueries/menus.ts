import { gql } from "@apollo/client";
export const GET_ALL_OCCASIONS = gql`
  query {
    getAllOccasions {
      _id
      name
      label
      catIds
    }
  }
`;
