export interface lead {
  //_id: string;
  userId: string;
  leadId: string;
  firstName: string;
  lastName: string;
  countryCode: string;
}

export type sideFilterType = {
  colorIds?: string[];
  endPrice?: number;
  fabricIds?: string[];
  occasionIds?: [string];
  patternIds?: string[];
  startPrice?: number;
  typeIds?: [string];
};

export type productFilterParams = {
  filter?: sideFilterType;
  catIds?: string[];
  occasionId?: string;
  isAccessory?: boolean;
  searchTerm?: string;
  sortBy?: any;
};

export interface ProductFilterVariables {
  limit: number;
  page: number;
  params?: productFilterParams;
}

export type Product = {
  _id: string;
  name: string;
  title: string;
  images: [string];
};
export interface ProductFilterResponse {
  productsFilter: {
    products: [Product];
    totalItemCount: number;
  };
}
