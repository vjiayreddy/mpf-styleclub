import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import ContainerComponent from "../../components/uiElements/Container/Container";

export const StyledSectionContainer = styled(ContainerComponent)(
  ({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: `80px 50px`,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    [theme.breakpoints.down("sm")]: {
      padding: `40px 20px`,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
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
