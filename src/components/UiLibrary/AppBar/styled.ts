import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledAppBarLogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
  },
}));
const StyledAppBarTabsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    display:"none"
  },
}));
const StyledAppBarIconsBox = styled(Box)(() => ({
  display: "flex",
}));
const StyledAppBarActionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  marginLeft: 30,
  [theme.breakpoints.down("sm")]: {
    display: "none",
    marginLeft: 0,
    alignItems: "center",
  },
}));

const StyledTabsList = styled(Tabs)(({ theme }) => ({
  minHeight: 62,
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));
const StyledTab = styled(Tab)<{ ref?: React.Ref<HTMLDivElement> }>(() => ({
  minHeight: 62,
  fontWeight: 500,
  fontSize: 16,
}));

const StyledDialogBoxContent = styled(Box)(({ theme }) => ({
  padding: 20,
}));

const StyledMenuPaper = styled(Paper)((theme) => ({
  width: "70%",
}));

const StyledSpanLabel = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

export {
  StyledAppBarLogoBox,
  StyledAppBarTabsBox,
  StyledAppBarIconsBox,
  StyledAppBarActionBox,
  StyledTabsList,
  StyledTab,
  StyledDialogBoxContent,
  StyledMenuPaper,
  StyledSpanLabel,
};
