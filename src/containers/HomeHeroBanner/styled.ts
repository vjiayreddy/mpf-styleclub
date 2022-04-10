import { styled } from "@mui/material/styles";
import Image from "next/image";
import ContainerComponent from "../../components/uiElements/Container/Container";

const StyledHeroContainer = styled(ContainerComponent)(({ theme }) => ({
  marginTop: 20,
  height: 500,
  borderRadius: 10,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledHeroImage = styled(Image)(({ theme }) => ({
  //objectFit:"contain",
  objectPosition: "100% 0%",
  borderRadius: 10,
  zIndex: -1,
}));

export { StyledHeroContainer, StyledHeroImage };
