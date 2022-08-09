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
      endPrice: 10000,
      startPrice: 2000,
    },
    sortBy: "popularity",
  };
  return params;
};

export const getCategoryIdByParams = (occasionId: any, occasionCatId: string) => {
  const params: productFilterParams = {
    occasionId: occasionId,
    catIds: [occasionCatId],
    filter: {
      endPrice: 75000,
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

export const getOccasionCategoryIndex = (
  occasionCategories: any,
  category: string
): number | boolean => {
  const index: number = _.findIndex(
    occasionCategories,
    (item: any) => item.name === category
  );
  return index != -1 ? index : false;
};
