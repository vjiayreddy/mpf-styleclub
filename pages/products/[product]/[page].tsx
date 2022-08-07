import React from "react";
import ContainerComponent from "../../../src/components/uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { NextRouter, useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../../../src/components/UiLibrary/Cards/ProductCard";
import SideFilterAccordion from "../../../src/components/UiLibrary/Accordions/SideFilterAccordion";
import { GetServerSideProps } from "next";
import apolloClient from "../../../src/apollo/config";
import { GET_PRODUCTS_BY_FILTER } from "../../../src/apollo/gqlQueries/products";
import {
  ProductFilterResponse,
  ProductFilterVariables,
  Product,
} from "../../../src/apollo/interfaces";
import { ROUTES } from "../../../src/routes/Routes";
import { GET_ALL_OCCASIONS } from "../../../src/apollo/gqlQueries/menus";
import ServerError from "../../../src/components/UiLibrary/Errors/ServerError";

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

const ProductsPage = (props: any) => {
  const { products, occasions } = props.initialData;
  const router: NextRouter = useRouter();

  if (props?.serverError) {
    return <ServerError />;
  }

  return (
    <>
      <ContainerComponent>
        <StyledMainBox>
          <StyledGridContainer container>
            <StyledSideFilterBox item md={3}>
              <SideFilterAccordion
                title="Fabric"
                component={<div>Fabric</div>}
              />
            </StyledSideFilterBox>
            <StyledProductGrid direction="column" container item md={9}>
              <Grid
                sx={{ flexGrow: 1, paddingBottom: "75px" }}
                item
                container
                spacing={2}
              >
                {products && (
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
                )}
              </Grid>
              <Grid item container alignItems="center" justifyContent="center">
                <Box p={3}>
                  <Pagination
                    count={10}
                    page={Number(router.query.page)}
                    color="secondary"
                    onChange={(_, page: number) => {
                      router.push({
                        pathname: `${ROUTES.PRODUCTS}/${router.query.product}/${page}`,
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
  const client = apolloClient;
  const { params } = ctx;
  try {
    const { data: dataOccasion, error: errorOccasion } = await client.query({
      query: GET_ALL_OCCASIONS,
    });
    const { data, error } = await client.query<
      ProductFilterResponse,
      ProductFilterVariables
    >({
      query: GET_PRODUCTS_BY_FILTER,
      variables: {
        limit: 25,
        page: Number(params.page) | 1,
        params: {
          filter: {
            endPrice: 4499,
            startPrice: 2000,
          },
          occasionId: "5fc2677bfa7ff20df01ab8ce",
          catIds: ["5da7220571762c2a58b27a65"],
          sortBy: "popularity",
        },
      },
    });
    if ((!data && error) || (!dataOccasion && errorOccasion)) {
      return {
        props: {
          serverError: true,
        },
      };
    }

    // if (dataOccasion && !errorOccasion) {
    //   const { getAllOccasions } = dataOccasion;

    // }

    return {
      props: {
        serverError: false,
        initialData: {
          products: data.productsFilter.products as [Product],
          totalProducts: data.productsFilter.totalItemCount,
          page: 1,
          limit: 25,
          occasions: dataOccasion,
        },
      },
    };
  } catch (error) {
    return {
      // notFound: true,
      props: {
        initialData: {
          products: [],
          totalProducts: 0,
          occasions: null,
          page: 1,
        },
        serverError: true,
      },
    };
  }
};

export default ProductsPage;
