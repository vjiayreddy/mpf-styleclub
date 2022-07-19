import React from "react";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

import CustomerFeatureCard from "../../src/components/UiLibrary/Cards/CustomerFeature";
import CollaborateCard from "../../src/components/UiLibrary/Cards/CollaborateCard";
import TitleWithSubtile from "../../src/components/UiLibrary/Typography/TitleWithSubtile";
import StreamlineCard from "../../src/components/UiLibrary/Cards/StreamlineCard";

const StyledBox = styled(Box)(() => ({
  margin: '0 auto',
  width: '85%',
  paddingBottom: 50
}))

const ProductsPage = () => {
  return (
    <ContainerComponent>
      <Box p={10}>
        <TitleWithSubtile title="Streamline your design process." subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`} />
      </Box>
      <StyledBox>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <CustomerFeatureCard btnColor="info" onClick={() => { console.log('Info') }} label="Learn More" btnId="card-button" icon="/assets/images/groom.webp" title="Engagement at scale" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />
          </Grid>
          <Grid item md={6}>
            <CustomerFeatureCard btnColor="info" showButton={true} onClick={() => { return; }} label="Learn More" btnId="card-button" icon="/assets/images/groom.webp" title="Connected with clients" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />
          </Grid>
          <Grid item md={6}>
            <CustomerFeatureCard btnColor="info" onClick={() => { return; }} label="Learn More" btnId="card-button" icon="/assets/images/groom.webp" title="Engagement at scale" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />
          </Grid>
          <Grid item md={6}>
            <CustomerFeatureCard btnColor="info" onClick={() => { return; }} label="Learn More" btnId="card-button" icon="/assets/images/groom.webp" title="Engagement at scale" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar" />
          </Grid>
        </Grid>
      </StyledBox>
      <Box p={10}>
        <TitleWithSubtile title="Collaborate and share across your organization as you grow." subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`} />
      </Box>
      <StyledBox>
        <Grid container spacing={3} >
          <Grid item md={4}>
            <CollaborateCard title="Download FIles" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans." />
          </Grid>
          <Grid item md={4}>
            <CollaborateCard title="Edit & Customize" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. " />
          </Grid>
          <Grid item md={4}>
            <CollaborateCard title="Save & Publish" content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. " />
          </Grid>
        </Grid>
      </StyledBox>
      <Box p={10}>
        <TitleWithSubtile title="Streamline your design process." subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`} />
      </Box>
      <StyledBox>
        <Grid container spacing={3} >
          <Grid item md={4}>
            <StreamlineCard />
          </Grid>
          <Grid item md={4}>
            <StreamlineCard />
          </Grid>
          <Grid item md={4}>
            <StreamlineCard />
          </Grid>
        </Grid>
      </StyledBox>
    </ContainerComponent>
  )
};

export default ProductsPage;
