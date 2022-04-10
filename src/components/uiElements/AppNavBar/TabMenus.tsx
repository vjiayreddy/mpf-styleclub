import React, { useState } from "react";
import { StyledTabsList, StyledTab } from "./styled";

const TabMenusComponent = () => {
  const [tabIndex, setTabIndex] = useState<string>("0");
  return (
    <StyledTabsList
      value={tabIndex}
      onChange={(event: React.SyntheticEvent, newValue: string) => {
        console.log(newValue);
        setTabIndex(newValue);
      }}
      aria-label="menu-navigation-tabslist"
    >
      <StyledTab value="0" label="Home" />
      <StyledTab value="1" label="Products" />
      <StyledTab value="2" label="Accessories" />
      <StyledTab value="3" label="StyleClub" />
    </StyledTabsList>
  );
};

export default TabMenusComponent;
