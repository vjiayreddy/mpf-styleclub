import React, { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { ROUTES } from "../../../routes/Routes";
import { cartItemsVar } from '../../../apollo/config';
import { useReactiveVar } from "@apollo/client";

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
  const { data: session } = useSession();
  const router = useRouter();
  const cartItems = useReactiveVar(cartItemsVar);
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
            <Hidden only={["xs", "sm"]}>
              <StyledAppbarTabsBox>
                <TabMenusComponent />
              </StyledAppbarTabsBox>
            </Hidden>

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
                {session ? (
                  <Button
                    title="Logout"
                    color="secondary"
                    onClick={() =>
                      signOut({
                        redirect: true,
                        callbackUrl: "/",
                      })
                    }
                    id="btn-signin-signup"
                  />
                ) : (
                  <Button
                    title="SIGN IN/SING UP"
                    onClick={() => {
                      router.push(ROUTES.LOGIN);
                    }}
                    id="btn-signin-signup"
                  />
                )}
              </Box>
            </StyledAppbarActionBox>
            {cartItems && <Box>
              {cartItems}
            </Box>}

          </ToolBar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default AppNavbarComponent;
