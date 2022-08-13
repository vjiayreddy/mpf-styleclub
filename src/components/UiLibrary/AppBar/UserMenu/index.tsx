import React from "react";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { signOut } from "next-auth/react";

interface UserActionMenuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus?: any[];
}

const StyledMenuPaper = styled(Paper)(() => ({
  borderRadius: 0,
  width: 200,
  minHeight: 200,
  padding: "20px",
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingTop: 10,
  color: theme.palette.grey[500],
  fontWeight: 400,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.secondary.main,
    fontWeight: 900,
  },
}));

const StyledMenuListHeader = styled(Typography)<{ component: any }>(() => ({
  fontWeight: 600,
  marginBottom: 10,
}));

const UserActionMenu: React.FC<UserActionMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  onKeyDown,
}) => {
  return (
    <Popper
      placement="bottom-end"
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <StyledMenuPaper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                dense
                autoFocusItem={open}
                id="user-action-menu"
                aria-labelledby="user-action-button"
                onKeyDown={onKeyDown}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <StyledMenuListHeader variant="body1" component="p">
                      Profile Setting
                    </StyledMenuListHeader>
                    <Divider />
                    <StyledMenuItem onClick={handleClose}>
                      Orders
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                      Measurements
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                      Account Setting
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                      Digital Profile
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                      {" "}
                      Personalization
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                      Subscriptions
                    </StyledMenuItem>
                    <StyledMenuItem
                      onClick={() => {
                        signOut();
                        handleClose(event);
                      }}
                    >
                      Logout
                    </StyledMenuItem>
                  </Grid>
                </Grid>
              </MenuList>
            </ClickAwayListener>
          </StyledMenuPaper>
        </Grow>
      )}
    </Popper>
  );
};
export default UserActionMenu;
