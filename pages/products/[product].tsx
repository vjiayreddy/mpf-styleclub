import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from "next";
import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apolloClient from "../../src/apollo/config";
import {
  Product,
  productFilterParams,
  ProductFilterResponse,
  ProductFilterVariables,
} from "../../src/apollo/interfaces";
import {
  GET_ALL_OCCASIONS,
  GET_CATEGORY_CONFIG,
  GET_OCCASION_CONFIG,
  GET_PRODUCTS_BY_FILTER,
} from "../../src/apollo/queries";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import ServerError from "../../src/components/UiLibrary/Errors/ServerError";
import { ROUTES } from "../../src/routes/Routes";
import {
  getCategoryFilters,
  getCategoryIdByParams,
  getFilteredColorIds,
  getFilteredFabricIds,
  getFilteredPatternIds,
  getOccasionCategoryIndex,
  getOccasionFilters,
  getOccasionIdByProductName,
  getSelectedFiltersByParam,
} from "../../src/services";

// Component
import ChipFilters from "../../src/components/Layouts/ProductsLayout/ChipFilters";
import ImageIconTabs from "../../src/components/uiElements/ImageIconTabs/ImageIconTabs";
import InfoCard from "../../src/components/UiLibrary/Cards/InfoCard";
import ProductCard from "../../src/components/UiLibrary/Cards/ProductCard";
import FiltersSvgIcon from "../../src/components/UiLibrary/Icon/components/Filters";
import NextBreadcrumbs from "../../src/components/UiLibrary/NextBreadcrumbs";
import TitleWithSubtile from "../../src/components/UiLibrary/Typography/TitleWithSubtile";
import ProductFilters from "../../src/containers/ProductFilters";

const StyledMainBox = styled(Box)(() => ({
  display: "flex",
  minHeight: `calc(100vh - 63px)`,
}));
const StyledGridContainer = styled(Grid)(() => ({}));
const StyledProductHeader = styled(Box)(({ theme }) => ({
  paddingTop: 50,
  paddingBottom: 50,
  paddingLeft: 20,
  backgroundColor: theme.palette.grey[100],
}));
const StyledProductGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledCategoryFilterBar = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  paddingBottom: 20,
}));
const StyledFilterBar = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  paddingTop: 20,
  paddingBottom: 20,
}));

// Client side render
const ProductsPage = (props: any) => {
  const { products, sideFilters, totalProducts } = props.initialData;
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const router: NextRouter = useRouter();
  if (props?.serverError) {
    return <ServerError />;
  }

  return (
    <>
      <StyledProductHeader>
        <ContainerComponent>
          <TitleWithSubtile
            titleSx={{ textAlign: "left", paddingLeft: "5px" }}
            titleVariant="h2"
            title="Products"
            subTitle=""
          />
          <Box pl={1} pr={1}>
            <NextBreadcrumbs />
          </Box>
        </ContainerComponent>
      </StyledProductHeader>
      <StyledCategoryFilterBar>
        <ContainerComponent>
          {sideFilters && (
            <Box>
              <ImageIconTabs
                tabIndex={getOccasionCategoryIndex(
                  sideFilters.categories,
                  router.query?.category as string
                )}
                onTabChange={(_, value) => {
                  router.push({
                    pathname: `${ROUTES.PRODUCTS}/${router.query.product}`,
                    query: {
                      p: 1,
                      category: sideFilters.categories[value]?.name,
                    },
                  });
                }}
                data={sideFilters?.categories || []}
              />
            </Box>
          )}
        </ContainerComponent>
      </StyledCategoryFilterBar>
      <StyledFilterBar>
        <ContainerComponent>
          <Box pl={3} pr={3}>
            <Grid alignItems="center" justifyContent="space-between" container>
              <Grid item>
                <Typography
                  sx={{ fontWeight: 500 }}
                  variant="body2"
                  component="p"
                >
                  Showing {router.query.p || 1} - {products.length} of{" "}
                  {totalProducts} result
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    setOpenFilters(true);
                  }}
                  startIcon={<FiltersSvgIcon />}
                  color="inherit"
                  variant="text"
                  size="small"
                >
                  Filters
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ContainerComponent>
      </StyledFilterBar>
      <ChipFilters filters={props} />
      <ContainerComponent>
        <StyledMainBox>
          <StyledGridContainer container>
            <StyledProductGrid direction="column" container item md={12}>
              <Grid
                sx={{ flexGrow: 1, paddingBottom: "75px" }}
                item
                xs={12}
                container
                spacing={3}
              >
                {products.length > 0 ? (
                  <>
                    {products.map((item, index) => (
                      <Grid key={index} xs={6} item md={3} lg={3} xl={2} sm={4}>
                        <ProductCard
                          name={item.name}
                          price={item.price}
                          imgUrl={item.images[0]}
                          title={item.title}
                        />
                      </Grid>
                    ))}
                  </>
                ) : (
                  <InfoCard
                    btnName="Try Again"
                    title="No Products Found"
                    content={`No products were found matching your selection.`}
                    onClickBtn={() => {
                      return;
                    }}
                  />
                )}
              </Grid>
            </StyledProductGrid>
            <Grid
              item
              xs={12}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Box p={3}>
                <Pagination
                  count={10}
                  page={Number(router.query.p) || 1}
                  color="secondary"
                  onChange={(_, page: number) => {
                    router.push({
                      pathname: `${ROUTES.PRODUCTS}/${router.query.product}`,
                      query: {
                        p: page,
                        category: router.query?.category,
                      },
                    });
                  }}
                  renderItem={(item) => (
                    <PaginationItem
                      components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </StyledGridContainer>
        </StyledMainBox>
      </ContainerComponent>
      <ProductFilters
        openDrawer={openFilters}
        onCloseDrawer={() => setOpenFilters(false)}
        data={props}
      />
    </>
  );
};

// Server side render
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const client = apolloClient;
  const { query } = ctx;
  let filterParams: productFilterParams = {};
  let occasionFilters = {};
  try {
    const { data: dataOccasion } = await client.query({
      query: GET_ALL_OCCASIONS,
    });

    if (dataOccasion) {
      const { getAllOccasions } = dataOccasion;
      const matchedOccasion = getOccasionIdByProductName(
        query.product as string,
        getAllOccasions
      );

      if (matchedOccasion) {
        filterParams = matchedOccasion;
        const { data: occasionConfig } = await client.query({
          query: GET_OCCASION_CONFIG,
          variables: {
            occasionId: matchedOccasion.occasionId,
          },
        });

        if (occasionConfig) {
          const { getOccasionConfig } = occasionConfig;
          occasionFilters = getOccasionFilters(getOccasionConfig);
          filterParams.filter.fabricIds = getFilteredFabricIds(
            query,
            occasionFilters
          );
          filterParams.filter.patternIds = getFilteredPatternIds(
            query,
            occasionFilters
          );
          filterParams.filter.colorIds = getFilteredColorIds(
            query,
            occasionFilters
          );
        }

        if (query.category) {
          const categoryIndex = getOccasionCategoryIndex(
            occasionFilters["categories"],
            query.category as string
          );
          const { data: dataCategoryConfig } = await client.query({
            query: GET_CATEGORY_CONFIG,
            variables: {
              catId: occasionFilters["categories"][categoryIndex]["_id"],
            },
          });

          if (dataCategoryConfig) {
            const { getCategoryConfig } = dataCategoryConfig;
            filterParams = getCategoryIdByParams(
              matchedOccasion.occasionId,
              occasionFilters["categories"][categoryIndex]["_id"]
            );
            occasionFilters["sideFilters"] =
              getCategoryFilters(getCategoryConfig).sideFilters;
            occasionFilters["typeFilters"] = getCategoryConfig["topFilters"];
            filterParams.filter.fabricIds = getFilteredFabricIds(
              query,
              occasionFilters
            );
            filterParams.filter.patternIds = getFilteredPatternIds(
              query,
              occasionFilters
            );
            filterParams.filter.colorIds = getFilteredColorIds(
              query,
              occasionFilters
            );
          }
        }

        const { data, error } = await client.query<
          ProductFilterResponse,
          ProductFilterVariables
        >({
          query: GET_PRODUCTS_BY_FILTER,
          variables: {
            limit: 25,
            page: Number(query.p) | 1,
            params: filterParams,
          },
        });

        if (!data && error) {
          return {
            props: {
              serverError: true,
              initialData: {
                products: [],
                sideFilters: [],
              },
            },
          };
        }
        return {
          props: {
            serverError: false,
            initialData: {
              products: data.productsFilter.products as [Product],
              totalProducts: data.productsFilter.totalItemCount,
              page: Number(query?.p) | 1,
              limit: 25,
              occasions: dataOccasion,
              sideFilters: occasionFilters,
            },
            selectedFabrics: getSelectedFiltersByParam(query, "fabric"),
            selectedColors: getSelectedFiltersByParam(query, "colors"),
            selectedPatterns: getSelectedFiltersByParam(query, "patterns"),
          },
        };
      }
    }
  } catch (error) {
    return {
      props: {
        serverError: true,
        initialData: {
          products: [],
          totalProducts: 0,
          sideFilters: [],
        },
      },
    };
  }
};

export default ProductsPage;
