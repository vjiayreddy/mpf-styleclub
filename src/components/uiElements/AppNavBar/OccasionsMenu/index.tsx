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
import Image from "next/image";
import { ethnicWare } from "../../../../utils/mockData";
import { NextRouter, useRouter } from "next/router";
import { checkIsActiveMenuRoute, ROUTES } from "../../../../routes/Routes";

interface OccasionsMenuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus: any[];
}

const StyledMenuPaper = styled(Paper)(() => ({
  width: "70%",
  padding: 20,
}));

const StyledMenuItem = styled(MenuItem)<{ isActive?: boolean }>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.secondary.main : theme.palette.common.black,
  fontWeight: isActive ? 900 : 400,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.secondary.main,
    fontWeight: 900,
  },
}));

const StyledMenuListHeader = styled(Typography)<{ component: any }>(() => ({
  paddingLeft: 15,
  textTransform: "uppercase",
  fontWeight: 900,
  marginBottom: 20,
}));

const OccasionsMenu: React.FC<OccasionsMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  onKeyDown,
  menus,
}) => {


  const router: NextRouter = useRouter();
  return (
    <Popper
      style={{
        zIndex: 1200,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
                id="composition-menu"
                aria-labelledby="composition-button"
                onKeyDown={onKeyDown}
              >
                <Grid container spacing={3}>
                  {menus.length > 0 ? (
                    <>
                      <Grid item md={4}>
                        <StyledMenuListHeader variant="body2" component="p">
                          Western Ware
                        </StyledMenuListHeader>
                        {menus.map((menu) => (
                          <StyledMenuItem
                            isActive={checkIsActiveMenuRoute(router, menu.name)}
                            key={menu._id}
                            onClick={() => {
                              router.push({
                                pathname: `${ROUTES.PRODUCTS}/${menu.name}`,
                              })
                              handleClose(event);
                            }}
                          >
                            {menu.label}
                          </StyledMenuItem>
                        ))}
                      </Grid>
                      <Grid item md={4}>
                        <StyledMenuListHeader variant="body2" component="p">
                          Ethnic Ware
                        </StyledMenuListHeader>

                        {ethnicWare.map((menu, index) => (
                          <StyledMenuItem key={index} onClick={handleClose}>
                            {menu}
                          </StyledMenuItem>
                        ))}
                      </Grid>
                      <Grid item md={4}>
                        <Image
                          placeholder="blur"
                          blurDataURL="/assets/images/portrait_banner.webp"
                          loading="lazy"
                          alt="styleclub-fashion"
                          width={200}
                          height={200}
                          src="/assets/images/portrait_banner.webp"
                        />
                      </Grid>
                    </>
                  ) : (
                    <Grid item xs={12}>
                      No Menu Data
                    </Grid>
                  )}
                </Grid>
              </MenuList>
            </ClickAwayListener>
          </StyledMenuPaper>
        </Grow>
      )}
    </Popper>
  );
};
export default OccasionsMenu;
