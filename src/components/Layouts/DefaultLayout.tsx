import React, { Fragment } from "react";
import AppNavbarComponent from "../UiLibrary/AppBar";
import Footer from "../UiLibrary/Footer";
import { RenderMainContent } from "./styled";
interface DefaultLayoutProps {
  children?: React.ReactNode;
  navMenus?: any[];
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  children,
  navMenus,
}) => {
  return (
    <Fragment>
      <AppNavbarComponent navMenus={navMenus} />
      <RenderMainContent>{children}</RenderMainContent>
      <Footer/>
    </Fragment>
  );
};

export default DefaultLayout;
