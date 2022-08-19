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
export const GET_OCCASION_CONFIG = gql`
  query getOccasionConfig($occasionId: String!) {
    getOccasionConfig(occasionId: $occasionId) {
      seo {
        title
        content_description
        meta_description
        h1_tag
        h2_tag
      }
      faqs {
        question
        answer
      }
      categories {
        name
        image
        personalizeImage
        personalizeNote
        isEnabledForPersonalize
        _id
        label
        seo {
          altText
        }
      }
      sideFilters {
        isPriceRangeFilterEnabled
        colorFilters {
          _id
          color
          colorname
        }
        patternFilters {
          _id
          name
        }
        fabricFilters {
          _id
          name
        }
        occasionFilters {
          _id
          name
        }
        minPrice
        maxPrice
      }
    }
  }
`;
