import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";

import { StyledAppbarLogoBox, StyledAppbarTabsBox } from "./styled";

import LogoComponent from "../../UiLibrary/Logo/Logo";
import Container from "@mui/material/Container";
import TabMenusComponent from "./TabMenus";

interface AppNavbarComponentProps {
  navMenus?: any[];
}

const AppNavbarComponent: React.FC<AppNavbarComponentProps> = ({
  navMenus,
}) => {
  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <ToolBar disableGutters>
            <StyledAppbarLogoBox>
              <LogoComponent />
            </StyledAppbarLogoBox>
            <StyledAppbarTabsBox>
              <TabMenusComponent navMenus={navMenus} />
            </StyledAppbarTabsBox>
          </ToolBar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default AppNavbarComponent;
