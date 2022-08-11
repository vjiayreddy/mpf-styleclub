import React, { useEffect, useState } from "react";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { NextRouter, useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../../src/components/UiLibrary/Cards/ProductCard";
import SideFilterAccordion from "../../src/components/UiLibrary/Accordions/SideFilterAccordion";
import { GetServerSideProps } from "next";
import apolloClient from "../../src/apollo/config";
import { useForm } from "react-hook-form";
import {
  ProductFilterResponse,
  ProductFilterVariables,
  Product,
  productFilterParams,
} from "../../src/apollo/interfaces";
import { ROUTES } from "../../src/routes/Routes";
import {
  GET_PRODUCTS_BY_FILTER,
  GET_ALL_OCCASIONS,
  GET_CATEGORY_CONFIG,
  GET_OCCASION_CONFIG,
} from "../../src/apollo/gqlQueries";
import ServerError from "../../src/components/UiLibrary/Errors/ServerError";
import {
  getOccasionIdByProductName,
  getOccasionFilters,
  getOccasionCategoryIndex,
  getCategoryIdByParams,
} from "../../src/services";

const StyledMainBox = styled(Box)(() => ({
  display: "flex",
  minHeight: `calc(100vh - 63px)`,
}));

const StyledGridContainer = styled(Grid)(() => ({}));

const StyledSideFilterBox = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  position: "-webkit-sticky",
  top: 100,
  bottom: 20,
}));
const StyledProductGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
}));

// Component
import ImageIconTabs from "../../src/components/uiElements/ImageIconTabs/ImageIconTabs";
import InfoCard from "../../src/components/UiLibrary/Cards/InfoCard";
import CheckBoxGroup from "../../src/components/UiLibrary/FormElements/CheckBoxGrop";

const ProductsPage = (props: any) => {
  const { products, sideFilters } = props.initialData;
  const router: NextRouter = useRouter();
  const { control } = useForm();

  if (props?.serverError) {
    return <ServerError />;
  }

  const handleRouter = (filterName: string, values: any) => {
    const { query } = router;
    const queryParams = { ...query };
    delete queryParams?.product;
    delete queryParams?.p;
    router.push({
      pathname: `${ROUTES.PRODUCTS}/${query.product}`,
      query: {
        p: 1,
        ...queryParams,
        [filterName]: values?.join(","),
      },
    });
  };

  return (
    <>
      {sideFilters && (
        <Box p={0}>
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
      <ContainerComponent>
        <StyledMainBox>
          <StyledGridContainer container>
            <StyledSideFilterBox item md={3}>
              {sideFilters && (
                <>
                  <SideFilterAccordion
                    title="Fabric"
                    component={
                      <div>
                        <CheckBoxGroup
                          onGetSelectedValues={(values) => {
                            handleRouter("fabric", values);
                          }}
                          control={control}
                          name="Fabric"
                          options={sideFilters.sideFilters.fabricFilters}
                        />
                      </div>
                    }
                  />
                  <SideFilterAccordion
                    title="Colors"
                    component={
                      <div>
                        <CheckBoxGroup
                          onGetSelectedValues={(values) => {
                            handleRouter("colors", values);
                          }}
                          control={control}
                          name="Colors"
                          options={sideFilters.sideFilters.colorFilters}
                        />
                      </div>
                    }
                  />
                  <SideFilterAccordion
                    title="Patterns"
                    component={
                      <div>
                        <CheckBoxGroup
                          onGetSelectedValues={(values) => {
                            handleRouter("patterns", values);
                          }}
                          control={control}
                          name="patterns"
                          options={sideFilters.sideFilters.patternFilters}
                        />
                      </div>
                    }
                  />
                </>
              )}
            </StyledSideFilterBox>
            <StyledProductGrid direction="column" container item md={9}>
              <Grid
                sx={{ flexGrow: 1, paddingBottom: "75px" }}
                item
                container
                spacing={2}
              >
                {products.length > 0 ? (
                  <>
                    {products.map((item, index) => (
                      <Grid key={index} item md={3}>
                        <ProductCard
                          imgUrl={item.images[0]}
                          title={item.title}
                        />
                      </Grid>
                    ))}
                  </>
                ) : (
                  <InfoCard
                    btnName="Try Again"
                    title="No Result Found"
                    content={`We couldn't find what you searched for.Ty searching again.`}
                    onClickBtn={() => { }}
                  />
                )}
              </Grid>
              <Grid item container alignItems="center" justifyContent="center">
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
            </StyledProductGrid>
          </StyledGridContainer>
        </StyledMainBox>
      </ContainerComponent>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const client = apolloClient;
  const { query } = ctx;
  let filterParams = {};
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
            filterParams = getCategoryIdByParams(
              matchedOccasion.occasionId,
              occasionFilters["categories"][categoryIndex]["_id"]
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
            params: filterParams as productFilterParams,
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
          },
        };
      }
    }
  } catch (error) {
    console.log(error);

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
};

export default ProductsPage;
