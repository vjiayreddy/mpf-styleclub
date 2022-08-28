import { gql } from "@apollo/client";

export const CORE_PRODUCT_FIELDS = gql`
  fragment CoreProductFields on Product {
    _id
    pId
    name
    title
    subTitle
    images
    price
    description
    brand{
      name
    }
  }
`;
