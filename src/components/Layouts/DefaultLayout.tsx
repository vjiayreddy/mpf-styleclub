import React, { Fragment, useState } from "react";
import AppNavbarComponent from "../uiElements/AppNavBar/Appbar";
import { RenderMainContent } from "./styled";
interface appLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayoutComponent: React.FunctionComponent<appLayoutProps> = ({
  children,
}) => {
  return (
    <Fragment>
      <AppNavbarComponent />
      <RenderMainContent>{children}</RenderMainContent>
    </Fragment>
  );
};

export default DefaultLayoutComponent;
