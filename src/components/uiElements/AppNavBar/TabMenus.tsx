import React, { useState, useRef } from "react";
import { StyledTabsList, StyledTab } from "./styled";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Tab from "@mui/material/Tab";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import { StyledMenuPaper } from "./styled";
import { Button } from "@mui/material";

const TabMenus = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [tabIndex, setTabIndex] = useState<string | boolean>(false);

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
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
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

  // ref={anchorRef}
  // id="composition-button"
  // aria-controls={open ? 'composition-menu' : undefined}
  // aria-expanded={open ? 'true' : undefined}
  // aria-haspopup="true"
  // onClick={handleToggle}

  return (
    <>
      <StyledTabsList
        value={tabIndex}
        onChange={(event: React.SyntheticEvent, newValue: string) => {
          setTabIndex(newValue);
        }}
        aria-label="main-menu-navigation"
      >
        <StyledTab value="0" label="Home" />
        <StyledTab
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? "composition-menu" : undefined}
          ref={anchorRef}
          value="1"
          label="Products"
          onClick={handleToggle}
        />
        <StyledTab value="2" label="Accessories" />
        <StyledTab value="3" label="StyleClub" />
      </StyledTabsList>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <StyledMenuPaper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </StyledMenuPaper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default TabMenus;
