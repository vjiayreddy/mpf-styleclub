import { gql } from "@apollo/client";
export const GET_PRODUCTS_BY_FILTER = gql`
  query ProductsFilter($params: ProductFilter!, $limit: Int, $page: Int) {
    productsFilter(params: $params, limit: $limit, page: $page) {
      products {
        _id
        title
        images
        name
      }
      totalItemCount
    }
  }
`;
