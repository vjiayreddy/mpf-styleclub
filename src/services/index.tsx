import _ from "lodash";
import { productFilterParams } from "../apollo/interfaces";

const getProductFiltersParams = (occasionId, catIds: string[]) => {
  const params: productFilterParams = {
    occasionId: occasionId,
    catIds: catIds,
    filter: {
      endPrice: 75000,
      startPrice: 2000,
    },
    sortBy: "popularity",
  };
  return params;
};

export const getOccasionIdByProductName = (
  productName: string,
  occasions: any
) => {
  const findProduct = _.find(occasions, (item) => item.name === productName);
  const occasionId = findProduct ? findProduct._id : null;
  const catIds = findProduct ? findProduct.catIds : [];
  return getProductFiltersParams(occasionId, catIds);
};

export const getCategoryIdByParams = (
  occasionId: any,
  occasionCatId: string
) => {
  return getProductFiltersParams(occasionId, [occasionCatId]);
};

export const getOccasionFilters = (getOccasionConfig: any) => {
  return {
    categories: getOccasionConfig?.categories || [],
    sideFilters: getOccasionConfig.sideFilters,
  };
};

export const getCategoryFilters = (getCategoryConfig: any) => {
  return {
    categories: getCategoryConfig?.topFilters.patternFilters || [],
    sideFilters: getCategoryConfig.sideFilters,
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

export const getFilteredFabricIds = (query: any, filterParams: any) => {
  let fabricIds: string[] = [];
  const sleetedFabrics = query?.fabric?.split(",") || [];
  const fabricFilters = filterParams.sideFilters?.fabricFilters || [];
  if (sleetedFabrics.length > 0) {
    sleetedFabrics.forEach((element) => {
      const fabricItem = _.find(fabricFilters, (item) => item.name === element);
      if (fabricItem) {
        fabricIds.push(fabricItem._id);
      }
    });
  }
  return fabricIds;
};

export const getFilteredPatternIds = (query: any, filterParams: any) => {
  let patternIds: string[] = [];
  const selectedFabrics = query?.patterns?.split(",") || [];
  const patternFilters = filterParams.sideFilters?.patternFilters || [];
  if (selectedFabrics.length > 0) {
    selectedFabrics.forEach((element) => {
      const fabricItem = _.find(
        patternFilters,
        (item) => item.name === element
      );
      if (fabricItem) {
        if (_.isArray(fabricItem._id)) {
          patternIds.push(...fabricItem._id);
        } else {
          patternIds.push(fabricItem._id);
        }
      }
    });
  }
  return patternIds;
};

export const getFilteredColorIds = (query: any, filterParams: any) => {
  let colorIds: string[] = [];
  const selectedColors = query?.colors?.split(",") || [];
  const colorFilters = filterParams.sideFilters?.colorFilters || [];
  if (selectedColors.length > 0) {
    selectedColors.forEach((element) => {
      const colorItem = _.find(
        colorFilters,
        (item) => item.colorname === element
      );
      if (colorItem) {
        if (_.isArray(colorItem._id)) {
          colorIds.push(...colorItem._id);
        } else {
          colorIds.push(colorItem._id);
        }
      }
    });
  }
  return colorIds;
};

export const getSelectedFiltersByParam = (query: any, param: string) => {
  return query?.[param] ? query?.[param].split(",") : [];
};
