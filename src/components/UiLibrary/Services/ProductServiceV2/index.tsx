import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ContainerComponent from "../../../uiElements/Container/Container";
import ServiceCardV2 from "../../Cards/ServiceCardV2";
import Shipping from "../../Icon/components/Shipping";
const StyledMainBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: 20,
}));

const ProductServiceV2 = () => {
  return (
    <ContainerComponent>
      <StyledMainBox>
        <Grid container>
          <Grid item md={3} lg={3} sm={6} xs={6}>
            <ServiceCardV2
              subtitle="From all orders over $1000"
              title="FREE SHIPPING"
              component={<Shipping />}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={6} xs={6}>
            <ServiceCardV2
              subtitle="Return money within 30 days"
              title="FREE RETURNS"
              component={<Shipping />}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={6} xs={6}>
            <ServiceCardV2
              subtitle="From all orders over $1000"
              title="FREE SHIPPING"
              component={<Shipping />}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={6} xs={6}>
            <ServiceCardV2
              subtitle="From all orders over $1000"
              title="FREE SHIPPING"
              component={<Shipping />}
            />
          </Grid>
        </Grid>
      </StyledMainBox>
    </ContainerComponent>
  );
};

export default ProductServiceV2;
