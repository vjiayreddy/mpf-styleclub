import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledAppbarLogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
  },
}));
const StyledAppbarTabsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  color: "gray",
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
const StyledTab = styled(Tab)(({}) => ({
  minHeight: 62,
}));

export {
  StyledAppbarLogoBox,
  StyledAppbarTabsBox,
  StyledAppbarIconsBox,
  StyledAppbarActionBox,
  StyledTabsList,
  StyledTab,
};
