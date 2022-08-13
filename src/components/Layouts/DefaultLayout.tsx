import React, { Fragment } from "react";
import AppNavbarComponent from "../UiLibrary/AppBar";
import { RenderMainContent } from "./styled";
interface DefaultLayoutProps {
  children?: React.ReactNode;
  navMenus?: any[];
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  children,
  navMenus
}) => {
  return (
    <Fragment>
      <AppNavbarComponent navMenus={navMenus} />
      <RenderMainContent>{children}</RenderMainContent>
    </Fragment>
  );
};

export default DefaultLayout;
