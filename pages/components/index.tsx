import React from "react";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

import CustomerFeature from "../../src/components/UiLibrary/Cards/CustomerFeature";
import TitleWithSubtile from "../../src/components/UiLibrary/Typography/TitleWithSubtile";

// Components

const StyledBox = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '85%'
}))

const ProductsPage = () => {
  return (
    <ContainerComponent>
      <TitleWithSubtile title="Streamline your design process." subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`} />
      <StyledBox>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <CustomerFeature icon="/assets/images/groom.webp" title="Engagement at scale" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />
          </Grid>
          <Grid item md={6}>
            <CustomerFeature icon="/assets/images/groom.webp" title="Connected with clients" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />
          </Grid>
          <Grid item md={6}>
            <CustomerFeature icon="/assets/images/groom.webp" title="Engagement at scale" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />

          </Grid>
          <Grid item md={6}>
            <CustomerFeature icon="/assets/images/groom.webp" title="Engagement at scale" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />

          </Grid>
        </Grid>
      </StyledBox>
    </ContainerComponent>
  )
};

export default ProductsPage;
