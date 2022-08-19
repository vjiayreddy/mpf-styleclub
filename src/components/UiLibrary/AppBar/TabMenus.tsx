import React, { useState } from "react";
import { StyledTabsList, StyledTab } from "./styled";
import OccasionsMenu from "./OccasionsMenu";
interface TabMenusProps {
  navMenus?: any[];
}
const TabMenus: React.FC<TabMenusProps> = ({ navMenus }) => {
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
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <StyledTabsList
        value={tabIndex}
        onChange={(_event: React.SyntheticEvent, newValue: string) => {
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
      <OccasionsMenu
        menus={navMenus}
        open={open}
        handleClose={handleClose}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      />
    </>
  );
};

export default TabMenus;
