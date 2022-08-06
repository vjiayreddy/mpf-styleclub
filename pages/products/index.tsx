import React from "react";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../../src/components/UiLibrary/Cards/ProductCard";
import SideFilterAccordion from "../../src/components/UiLibrary/Accordions/SideFilterAccordion";
import { GetStaticProps, GetStaticPropsContext } from "next";
import apolloClient from "../../src/apollo/config";
import { GET_PRODUCTS_BY_FILTER } from "../../src/apollo/gqlQueries/products";
import {
  ProductFilterResponse,
  ProductFilterVariables,
  Product,
} from "../../src/apollo/interfaces";

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
  const { products } = props;
  return (
    <ContainerComponent>
      <StyledMainBox>
        <StyledGridContainer container>
          <StyledSideFilterBox item md={3}>
            <SideFilterAccordion title="Fabric" component={<div>Fabric</div>} />
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
                      <ProductCard imgUrl={item.images[0]} title={item.title} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
            <Grid item container alignItems="center" justifyContent="center">
              <Box p={3}>
                <Pagination
                  count={10}
                  color="secondary"
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
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const client = apolloClient;
  try {
    const { data, error } = await client.query<
      ProductFilterResponse,
      ProductFilterVariables
    >({
      query: GET_PRODUCTS_BY_FILTER,
      variables: {
        limit: 25,
        page: 1,
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

    if (!data && error) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        products: data.productsFilter.products as [Product],
        totalProducts: data.productsFilter.totalItemCount,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ProductsPage;
