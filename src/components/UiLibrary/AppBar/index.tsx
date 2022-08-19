import React, { Fragment, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import { useSession } from "next-auth/react";

import {
  StyledAppBarLogoBox,
  StyledAppBarTabsBox,
  StyledAppBarIconsBox,
  StyledSpanLabel,
} from "./styled";

import LogoComponent from "../Logo/Logo";
import Container from "@mui/material/Container";
import TabMenusComponent from "./TabMenus";
import UserActions from "./UserActions";
import { Typography } from "@mui/material";

interface AppNavbarComponentProps {
  navMenus?: any[];
}

const AppNavbarComponent: React.FC<AppNavbarComponentProps> = ({
  navMenus,
}) => {
  const { data: session } = useSession();

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <ToolBar disableGutters>
            <StyledAppBarLogoBox>
              <Typography variant="h6" component="h6">
                STYLE <StyledSpanLabel>CLUB</StyledSpanLabel>
              </Typography>
              {/* <LogoComponent /> */}
            </StyledAppBarLogoBox>
            <StyledAppBarTabsBox>
              <TabMenusComponent navMenus={navMenus} />
            </StyledAppBarTabsBox>
            <StyledAppBarIconsBox>
              <UserActions session={session} />
            </StyledAppBarIconsBox>
          </ToolBar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default AppNavbarComponent;
