import _ from "lodash";
import { productFilterParams } from "../apollo/interfaces";

export const getOccasionIdByProductName = (
  productName: string,
  occasions: any
) => {
  const findProduct = _.find(occasions, (item) => item.name === productName);
  const params: productFilterParams = {
    occasionId: findProduct ? findProduct._id : null,
    catIds: findProduct ? findProduct.catIds : [],
    filter: {
      endPrice: 4999,
      startPrice: 2000,
    },
    sortBy: "popularity",
  };
  return params;
};

export const getOccasionFilters = (getOccasionConfig: any) => {
  return {
    categories: getOccasionConfig?.categories || [],
    sideFilters: getOccasionConfig.sideFilters,
  };
};
