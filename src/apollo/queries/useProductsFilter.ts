import {
  ProductFilterResponse,
  ProductFilterVariables,
} from "./../interfaces/index";
import { GET_PRODUCTS_BY_FILTER } from "./../gqlQueries/products";
import { useLazyQuery } from "@apollo/client";

export const useProductsFilter = () => {
  const [ProductsFilter, { data: data, loading, error }] = useLazyQuery<
    ProductFilterResponse,
    ProductFilterVariables
  >(GET_PRODUCTS_BY_FILTER);
  return {
    ProductsFilter,
    data,
    loading,
    error,
  };
};
