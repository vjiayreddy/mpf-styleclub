import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";

import {
  StyledAppbarLogoBox,
  StyledAppbarTabsBox,
  StyledAppbarIconsBox,
  StyledAppbarActionBox,
} from "./styled";

import LogoComponent from "../Logo/Logo";
import Container from "@mui/material/Container";
import TooltipComponent from "../Tooltip/Tooltip";
import Button from "../Buttons/Button";
import TabMenusComponent from "./TabMenus";

const AppNavbarComponent = () => {
  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container disableGutters maxWidth="lg">
          <ToolBar disableGutters>
            <StyledAppbarLogoBox>
              <LogoComponent />
            </StyledAppbarLogoBox>
            <StyledAppbarTabsBox>
              <TabMenusComponent />
            </StyledAppbarTabsBox>
            <StyledAppbarIconsBox>
              <Box>
                <TooltipComponent
                  title="search"
                  component={
                    <IconButton>
                      <SearchIcon color="secondary" />
                    </IconButton>
                  }
                />
              </Box>
              <Box>
                <TooltipComponent
                  title="dail"
                  component={
                    <IconButton>
                      <CallIcon color="secondary" />
                    </IconButton>
                  }
                />
              </Box>
              <Box>
                <TooltipComponent
                  title="cart"
                  component={
                    <IconButton>
                      <ShoppingCartIcon color="secondary" />
                    </IconButton>
                  }
                />
              </Box>
            </StyledAppbarIconsBox>
            <StyledAppbarActionBox>
              <Box>
                <Button
                  title="SIGN IN/SING UP"
                  onClick={() => {}}
                  id="btn-signin-signup"
                />
              </Box>
            </StyledAppbarActionBox>
          </ToolBar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default AppNavbarComponent;
