import React, { useState, useEffect } from "react";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm, Controller } from "react-hook-form";
import CircleChecked from "@mui/icons-material/CheckCircleOutline";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";

// Components
import CustomerFeatureCard from "../../src/components/UiLibrary/Cards/CustomerFeature";
import CollaborateCard from "../../src/components/UiLibrary/Cards/CollaborateCard";
import TitleWithSubtile from "../../src/components/UiLibrary/Typography/TitleWithSubtile";
import StreamlineCard from "../../src/components/UiLibrary/Cards/StreamlineCard";
import RewardCard from "../../src/components/UiLibrary/Cards/RewardCard";
import ContentSlider from "../../src/components/UiLibrary/ContentSlider";
import sliderData from "../../src/utils/sliderData.json";
import LoadingButton from "../../src/components/UiLibrary/LoadingButton";
import CheckBoxGroup from "../../src/components/UiLibrary/FormElements/CheckBoxGrop";

const StyledBox = styled(Box)(() => ({
  margin: "0 auto",
  width: "85%",
  paddingBottom: 50,
}));

const checkBoxData = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Black",
    value: "black",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "green",
    value: "green",
  },
];

const ProductsPage = (props: { sliderData }) => {
  const { control, setValue, getValues } = useForm();
  const [selectedItems, setSelectedItems] = useState<any>(["red", "black"]);

  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems: any) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setValue("Fabric", selectedItems);
  }, [selectedItems]);

  return (
    <ContainerComponent>
      <Box p={10}>
        <CheckBoxGroup
          defaultValue={"red"}
          control={control}
          options={checkBoxData}
          name="fabric"
        />

        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Fabric</FormLabel>
          {checkBoxData.map((option, index) => (
            <FormControlLabel
              key={index}
              label={option.label}
              control={
                <Controller
                  render={(props) => {
                    return (
                      <Checkbox
                        icon={<CircleChecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    );
                  }}
                  name="Fabric"
                  control={control}
                />
              }
            />
          ))}
        </FormControl>
      </Box>

      <Box p={10}>
        <ContentSlider data={sliderData} />
        <LoadingButton
          loading={true}
          color="secondary"
          id="loading-button"
          label="Loading"
        />
        <TitleWithSubtile
          title="Streamline your design process."
          subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`}
        />
      </Box>
      <StyledBox>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <CustomerFeatureCard
              btnColor="info"
              onClick={() => {
                console.log("Info");
              }}
              label="Learn More"
              btnId="card-button"
              icon="/assets/images/groom.webp"
              title="Engagement at scale"
              content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar"
            />
          </Grid>
          <Grid item md={6}>
            <CustomerFeatureCard
              btnColor="info"
              showButton={true}
              onClick={() => {
                return;
              }}
              label="Learn More"
              btnId="card-button"
              icon="/assets/images/groom.webp"
              title="Connected with clients"
              content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar"
            />
          </Grid>
          <Grid item md={6}>
            <CustomerFeatureCard
              btnColor="info"
              onClick={() => {
                return;
              }}
              label="Learn More"
              btnId="card-button"
              icon="/assets/images/groom.webp"
              title="Engagement at scale"
              content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar"
            />
          </Grid>
          <Grid item md={6}>
            <CustomerFeatureCard
              btnColor="info"
              onClick={() => {
                return;
              }}
              label="Learn More"
              btnId="card-button"
              icon="/assets/images/groom.webp"
              title="Engagement at scale"
              content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar"
            />
          </Grid>
        </Grid>
      </StyledBox>
      <Box p={10}>
        <TitleWithSubtile
          title="Collaborate and share across your organization as you grow."
          subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`}
        />
      </Box>
      <StyledBox>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <CollaborateCard
              title="Download FIles"
              content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans."
            />
          </Grid>
          <Grid item md={4}>
            <CollaborateCard
              title="Edit & Customize"
              content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. "
            />
          </Grid>
          <Grid item md={4}>
            <CollaborateCard
              title="Save & Publish"
              content="Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. "
            />
          </Grid>
        </Grid>
      </StyledBox>
      <Box p={10}>
        <TitleWithSubtile
          title="Streamline your design process."
          subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`}
        />
      </Box>
      <StyledBox>
        <Grid container spacing={3}>
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
      <Box p={10}>
        <TitleWithSubtile
          title="Here are some of the rewards from putting our customer first."
          subTitle={`Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.`}
        />
      </Box>
      <StyledBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RewardCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <RewardCard />
          </Grid>
        </Grid>
      </StyledBox>
    </ContainerComponent>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      sliderData: sliderData,
    },
  };
}

export default ProductsPage;
