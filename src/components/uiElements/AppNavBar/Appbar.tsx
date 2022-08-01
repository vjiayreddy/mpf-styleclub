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
  StyledMenuPaper
} from "./styled";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack'
import LogoComponent from "../Logo/Logo";
import Container from "@mui/material/Container";
import TooltipComponent from "../Tooltip/Tooltip";
import MuiButton from "@mui/material/Button";
import Button from "../Buttons/Button";
import TabMenusComponent from "./TabMenus";

interface AppNavbarComponentProps {
  navMenus?: any[]
}


const AppNavbarComponent: React.FC<AppNavbarComponentProps> = ({ navMenus }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { data: session } = useSession();
  const router = useRouter();
  const cartItems = useReactiveVar(cartItemsVar);


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);


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
