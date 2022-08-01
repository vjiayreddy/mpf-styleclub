import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledAppbarLogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
  },
}));
const StyledAppbarTabsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledAppbarIconsBox = styled(Box)(() => ({
  display: "flex",
}));
const StyledAppbarActionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  marginLeft: 30,
  [theme.breakpoints.down("sm")]: {
    display: "none",
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
}));

const StyledDialogBoxContent = styled(Box)(({ theme }) => ({
  padding: 20,
}));

const StyledMenuPaper = styled(Paper)((theme) => ({
  width:"70%"
}));

export {
  StyledAppbarLogoBox,
  StyledAppbarTabsBox,
  StyledAppbarIconsBox,
  StyledAppbarActionBox,
  StyledTabsList,
  StyledTab,
  StyledDialogBoxContent,
  StyledMenuPaper,
};
