import { gql } from "@apollo/client";

export const CORE_PRODUCT_FIELDS = gql`
  fragment CoreProductFields on Product {
    _id
    pid
    name
    title
    subtitle
    images
    price
  }
`;
