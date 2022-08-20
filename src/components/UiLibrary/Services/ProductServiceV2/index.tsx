import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ContainerComponent from "../../../uiElements/Container/Container";
import ServiceCardV2 from "../../Cards/ServiceCardV2";
import Shipping from "../../Icon/components/Shipping";
import Return from "../../Icon/components/Return";
import SecureShopping from "../../Icon/components/SecureShopping";
import GoalBadge from "../../Icon/components/GoalBadge";

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
              component={<Return />}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={6} xs={6}>
            <ServiceCardV2
              subtitle="You're in safe hands"
              title="SECURE SHOPPING"
              component={<SecureShopping />}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={6} xs={6}>
            <ServiceCardV2
              subtitle="We have everything you need"
              title="OVER 10,000 STYLES"
              component={<GoalBadge/>}
            />
          </Grid>
        </Grid>
      </StyledMainBox>
    </ContainerComponent>
  );
};

export default ProductServiceV2;
