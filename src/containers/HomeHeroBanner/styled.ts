import { SxProps } from "@mui/system";
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import ContainerComponent from "../../components/uiElements/Container/Container";

const StyledHeroContainer = styled(ContainerComponent)(({ theme }) => ({
  marginTop: 20,
  height: 550,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
}));

const StyledHeroImage = styled(Image)(({ theme }) => ({
  //objectFit:"contain",
  objectPosition: "100% 0%",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  zIndex: -1,
  [theme.breakpoints.down("sm")]: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    objectPosition: "50% 0%",
  },
}));

const StyledHeroContent = styled(Box)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const SxHeroTitleStyles: SxProps = (theme: Theme) => ({
  width: "55%",
  textAlign: "center",
  margin: "0 auto",
  color: theme.palette.common.white,
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize:50
  },
});
const SxHeroContentStyles: SxProps = (theme: Theme) => ({
  width: "55%",
  textAlign: "center",
  margin: "0 auto",
  color: theme.palette.common.white,
  lineHeight: 1.3,
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize:20
  },
});

export const StyledSpanLabel = styled("mark")(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `100% 46%`,
  backgroundPosition: `0 65%`,
}));

export {
  StyledHeroContainer,
  StyledHeroImage,
  StyledHeroContent,
  SxHeroTitleStyles,
  SxHeroContentStyles,
};
