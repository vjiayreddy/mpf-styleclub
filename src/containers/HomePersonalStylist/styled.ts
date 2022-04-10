import { SxProps } from "@mui/system";
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import ContainerComponent from "../../components/uiElements/Container/Container";

export const StyledSectionContainer = styled(ContainerComponent)(
  ({ theme }) => ({
    padding: "80px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const SxSectionTitleStyles: SxProps = (theme: Theme) => ({
  width: "65%",
  textAlign: "center",
  margin: "0 auto",
  color: theme.palette.secondary.main,
  lineHeight: 1,
});

export const SxSectionContentStyles: SxProps = (theme: Theme) => ({
  width: "75%",
  textAlign: "center",
  margin: "0 auto",
  color: theme.palette.secondary.main,
  lineHeight: 1.5,
  marginTop: "20px",
});

export const StyledLeftSideGridBox = styled(Box)(({ theme }) => ({
  minHeight: 400,
  position: "relative",
}));
export const StyledLeftSideImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "100% 0%",
  borderTopRightRadius: 50,
}));

export const StyledRightSideGridBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding:50
}));
