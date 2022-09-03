import { gql } from "@apollo/client";
import { CORE_PRODUCT_FIELDS } from "../fragments";
export const GET_PRODUCTS_BY_FILTER = gql`
  query ProductsFilter($params: ProductFilter!, $limit: Int, $page: Int) {
    productsFilter(params: $params, limit: $limit, page: $page) {
      products {
        _id
        title
        images
        name
        price
        discPrice
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
export const GET_CATEGORY_CONFIG = gql`
  query getCategoryConfig($catId: String!) {
    getCategoryConfig(catId: $catId) {
      sideFilters {
        isPriceRangeFilterEnabled
        isDynamicFiltersEnabled
        dynamicFilterMasters {
          label
          master_name
          isEnabled
          filters {
            _id
            name
            catId
            image
          }
        }
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
        minPrice
        maxPrice
      }
      faqs {
        question
        answer
      }
      topFilters {
        isPatternFilterEnabled
        isTypeFilterEnabled
        isDynamicFiltersEnabled
        dynamicFilterMasters {
          label
          master_name
          isEnabled
          filters {
            _id
            name
            catId
            image
          }
        }
        patternFilters {
          _id
          name
          image
        }
        typeFilters {
          _id
          name
          image
        }
      }
      category {
        seo {
          title
          content_description
          meta_description
          h1_tag
          h2_tag
        }
      }
    }
  }
`;
export const GET_SINGLE_PRODUCT_BY_NAME = gql`
  query GetSingleProductByName($productName: String!) {
    getSingleProductByName(productName: $productName) {
      _id
      pId
      name
      title
      subTitle
      images
      price
      description
      catId
      pidSerial
      secondaryColor {
        colorname
      }
      fabric {
        name
      }
      tags {
        catTag
        isModifiable
        isVisible
        label
        name
        value
      }
      brand {
        name
      }
    }
  }
`;
export const GET_SIMILAR_PRODUCTS = gql`
  query GetSimilarProducts(
    $productId: ID!
    $catId: String!
    $page: Int
    $limit: Int
  ) {
    getSimilarProducts(
      productId: $productId
      catId: $catId
      page: $page
      limit: $limit
    ) {
      products {
        _id
        images
        name
        title
        price
      }
    }
  }
`;
// User Related GQL Queries
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
export const POST_USER_REGISTRATION = gql`
  mutation RegisterUser(
    $email: String!
    $phone: String!
    $password: String!
    $countryCode: String!
    $firstName: String!
    $lastName: String!
    $fullName: String!
    $redirectTo: String!
  ) {
    registerUser(
      email: $email
      phone: $phone
      countryCode: $countryCode
      password: $password
      firstName: $firstName
      lastName: $lastName
      fullName: $fullName
      redirectTo: $redirectTo
    ) {
      _id
      firstName
      lastName
      fullName
      phone
      email
      countryCode
      isEmailVerified
      isMobileVerified
    }
  }
`;
