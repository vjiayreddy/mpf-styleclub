import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import ProductServiceV2 from "../../src/components/UiLibrary/Services/ProductServiceV2";
import { styled } from "@mui/material/styles";
import { Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import SizeSvgIcon from "../../src/components/UiLibrary/Icon/components/Size";
import ProductViewSlider from "../../src/components/UiLibrary/Sliders/ProductView";
import apolloClient from "../../src/apollo/config";
import { GET_SINGLE_PRODUCT_BY_NAME } from "../../src/apollo/queries";
import { prefetchProducts } from "../../data/prefetchProducts";
import ServerError from "../../src/components/UiLibrary/Errors/ServerError";
import { GetStaticProps } from "next";
import { NextRouter, useRouter } from "next/router";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
}));

const StyledProductContentBox = styled(Grid)(({ theme }) => ({
  paddingLeft: theme.spacing(10),
}));

const StyledProductContent = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    color: theme.palette.grey[700],
    fontSize: 16,
  })
);

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  "&.MuiCardHeader-root": {
    paddingLeft: 10,
  },
  "& .MuiCardHeader-title": {
    fontSize: 18,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    paddingBottom: 10,
  },
}));

const StyledSpanLabel = styled("span")(({ theme }) => ({
  color: theme.palette.grey[500],
  paddingLeft: 5,
}));

const StyledProductInfoLabel = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    lineHeight: 1.5,
  })
);

const StyledCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
}));

const slidesData = [
  "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/MPFProducts_2.0/Shirt/60310f23d0c8573eb07d1592_0.jpg",
  "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/MPFProducts_2.0/Shirt/60310f23d0c8573eb07d1592_1.jpg",
  "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/MPFProducts_2.0/Shirt/60310f23d0c8573eb07d1592_2.jpg",
];

interface ProductDetailsProps {
  product: any;
  serverError: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  serverError,
}) => {
  const router: NextRouter = useRouter();

  if (router.isFallback) {
    return (
      <ContainerComponent>
        <ProductServiceV2 />
        <div>Loading...</div>
      </ContainerComponent>
    );
  }

  if (serverError) {
    return (
      <ContainerComponent>
        <ProductServiceV2 />
        <ServerError />
      </ContainerComponent>
    );
  }

  return (
    <ContainerComponent>
      <ProductServiceV2 />
      <StyledGridContainer container spacing={8}>
        <Grid xs={12} item md={5} lg={5} xl={4}>
          <ProductViewSlider
            imageAlt={product.name}
            sliderImages={product.images}
          />
        </Grid>
        <StyledProductContentBox xs={12} item md={7} lg={7} xl={8}>
          <Box mb={4}>
            <Box mt={2} mb={2}>
              <Typography variant="body1" component="span">
                {product.brand[0].name}
              </Typography>
            </Box>
            <Typography variant="h3" component="h6">
              {product.title}
            </Typography>
            <Box mt={2} mb={2}>
              <Typography color="primary" variant="h4" component="h6">
                ₹{product.price}
              </Typography>
            </Box>
            <Box>
              <StyledProductContent component="span" variant="body1">
                {product.description}
              </StyledProductContent>
            </Box>
          </Box>
          <Box mb={2}>
            <Button
              sx={{ textDecoration: "underline" }}
              startIcon={<SizeSvgIcon />}
              variant="text"
              size="small"
              color="secondary"
            >
              Size Chart
            </Button>
          </Box>
          <Grid container spacing={3}>
            <Grid item>
              <Button variant="contained" color="secondary">
                Add To Cart
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                By Now
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <StyledCard>
                  <StyledCardHeader title="Product Details" />
                  <CardContent sx={{ paddingLeft: `10px`, paddingTop: "0px" }}>
                    <Box>
                      <StyledProductInfoLabel   gutterBottom component="p" variant="subtitle2">
                        Product Id :
                        <StyledSpanLabel>{product.pidSerial}</StyledSpanLabel>{" "}
                      </StyledProductInfoLabel>
                    </Box>
                    {product.fabric && (
                      <Box>
                        <StyledProductInfoLabel
                          gutterBottom
                          component="p"
                          variant="subtitle2"
                        >
                          Fabric :
                          <StyledSpanLabel>
                            {product.fabric[0].name}
                          </StyledSpanLabel>{" "}
                        </StyledProductInfoLabel>
                      </Box>
                    )}
                    {product.secondaryColor && (
                      <Box>
                        <StyledProductInfoLabel
                          gutterBottom
                          component="p"
                          variant="subtitle2"
                        >
                          Color :
                          <StyledSpanLabel>
                            {product.secondaryColor[0].colorname}
                          </StyledSpanLabel>{" "}
                        </StyledProductInfoLabel>
                      </Box>
                    )}
                    {product.tags.map((item, index) => (
                      <Box key={index}>
                        {item.isVisible && item.name && (
                          <StyledProductInfoLabel
                            gutterBottom
                            component="p"
                            variant="subtitle2"
                          >
                            {item.label} :
                            <StyledSpanLabel>{item.name}</StyledSpanLabel>{" "}
                          </StyledProductInfoLabel>
                        )}
                      </Box>
                    ))}
                  </CardContent>
                </StyledCard>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={3}>
                <StyledCard>
                  <StyledCardHeader
                    title="Shipping and Delivery
"
                  />
                  <CardContent sx={{ paddingLeft: `10px`, paddingTop: "0px" }}>
                    <Box mb={2}>
                      <StyledProductInfoLabel component="p" variant="subtitle2">
                        In India
                      </StyledProductInfoLabel>
                      <Typography>
                        Free shipping within 10 days on or before 06 Sep, 2022.
                      </Typography>
                    </Box>
                    <Box>
                      <StyledProductInfoLabel component="p" variant="subtitle2">
                        Outside India:
                      </StyledProductInfoLabel>
                      <Typography>
                        Within 2-3 weeks. Please contact us on +91 8008329992
                      </Typography>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Box>
            </Grid>
          </Grid>
        </StyledProductContentBox>
      </StyledGridContainer>
    </ContainerComponent>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = apolloClient;
  const { params } = context;
  try {
    const { data, error } = await client.query({
      query: GET_SINGLE_PRODUCT_BY_NAME,
      variables: {
        productName: params.id,
      },
    });

    if (error && !data) {
      return {
        notFound: true,
      };
    }
    return {
      revalidate: 1,
      props: {
        serverError: false,
        product: data?.getSingleProductByName,
      },
    };
  } catch (error) {
    return {
      props: { serverError: true, product: null },
    };
  }
};
export async function getStaticPaths() {
  return {
    paths: prefetchProducts,
    fallback: true,
  };
}

export default ProductDetails;
