import React, { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Avatar, styled } from "@mui/material";
import Box from "@mui/system/Box";
interface AppNavbarProps {
  openDrawer: boolean;
  drawerWidth: number;
  onOpenDrawer: () => void;
}

const AppNavbarComponent: React.FC<AppNavbarProps> = ({
  openDrawer,
  drawerWidth,
  onOpenDrawer,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <ToolBar>
          <Box></Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 25, height: 25 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </ToolBar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            paddingTop: "64px",
          },
        }}
        open={openDrawer}
        variant="persistent"
        anchor="left"
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem divider={true} button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Menu
        onClose={handleClose}
        onClick={handleClose}
        id="account-menu"
        open={open}
        anchorEl={anchorEl}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Card sx={{ minWidth: 150 }}>
          <CardContent>Menu</CardContent>
        </Card>
      </Menu>
    </Fragment>
  );
};

export default AppNavbarComponent;
