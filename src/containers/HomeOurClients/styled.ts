import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ContainerComponent from "../../components/uiElements/Container/Container";

export const StyledSectionContainer = styled(ContainerComponent)(() => ({
  paddingTop: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledImageSliderWrapper = styled(Box)(() => ({
  width: "100%",
  minHeight:300
}));
