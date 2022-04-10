import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledAppbarLogoBox = styled(Box)(({ theme }) => ({}));
const StyledAppbarTabsBox = styled(Box)(() => ({
  flexGrow: 1,
  color: "gray",
}));
const StyledAppbarIconsBox = styled(Box)(() => ({
  display: "flex",
}));
const StyledAppbarActionBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  marginLeft: 30,
}));

const StyledTabsList = styled(Tabs)(({}) => ({
  minHeight: 62,
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
