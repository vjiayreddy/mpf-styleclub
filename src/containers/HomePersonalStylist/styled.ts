import { SxProps } from "@mui/system";
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import ContainerComponent from "../../components/uiElements/Container/Container";

interface ShowcaseBorder {
  variant: "left" | "Right";
}

export const StyledSectionContainer = styled(ContainerComponent)(
  ({ theme }) => ({
    padding: "80px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 20px",
    },
  })
);

export const SxSectionTitleStyles: SxProps = (theme: Theme) => ({
  width: "65%",
  textAlign: "center",
  margin: "0 auto",
  color: theme.palette.secondary.main,
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 35,
  },
});

export const SxSectionContentStyles: SxProps = (theme: Theme) => ({
  width: "75%",
  textAlign: "center",
  margin: "0 auto",
  color: theme.palette.secondary.main,
  lineHeight: 1.5,
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 16,
  },
});

export const StyledImageBoxWrapper = styled(Box)(({ theme }) => ({
  minHeight: 400,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    minHeight: 250,
  },
}));

export const StyledLeftSideImage = styled(Image)(({ theme }) => ({
  objectFit: "contain",
  objectPosition: "100% 0%",
  borderTopRightRadius: 50,
  borderBottomRightRadius: 50,
  [theme.breakpoints.down("sm")]: {
    objectPosition: "50% 0%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
}));
export const StyledRightSideImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "100% 0%",
  borderTopLeftRadius: 50,
  borderBottomLeftRadius: 50,
  [theme.breakpoints.down("sm")]: {
    objectPosition: "50% 0%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export const StyledRightSideContentGridBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: `50px 80px 50px 50px`,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: `20px 80px 50px 50px`,
  },
}));
export const StyledLeftSideContentGridBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: `50px 50px 50px 80px`,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: `20px 50px 50px 40px`,
  },
}));

export const SxLeftSideTitleStyles: SxProps = (theme: Theme) => ({
  lineHeight: 1.2,
  marginBottom: 2,
});

export const StyledShowcaseBorder = styled(Box)<ShowcaseBorder>(
  ({ theme, variant }) => ({
    position: "absolute",
    borderRadius: 50,
    border: `2px solid ${theme.palette.THRID_COLOR}`,
    height: "100%",
    width: "100%",
    top: 40,
    zIndex: 1,
    left: variant == "left" ? -40 : 40,
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      top: -33,
      left: 8,
      height: 390,
    },
  })
);

export const StyledShowGridIcon = styled("img")<ShowcaseBorder>(
  ({ theme, variant }) => ({
    position: "absolute",
    top: 90,
    right: variant === "left" ? 90 : 70,
    [theme.breakpoints.down("sm")]: {
      top: 20,
      right: 35,
    },
  })
);

export const StyledNumberCircle = styled(Box)(({ theme }) => ({
  height: 40,
  width: 40,
  borderRadius: "100%",
  backgroundColor: theme.palette.THRID_COLOR,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...theme.typography.primaryFont,
  fontSize: 20,
  marginBottom: 20,
}));
