import React, { Fragment, useState } from "react";
import AppNavbarComponent from "../uiElements/AppNavBar/Appbar";
import { RenderMainContent } from "./styled";
interface appLayoutProps {
  children: React.ReactNode;
}

const ApplayoutComponent: React.FunctionComponent<appLayoutProps> = ({
  children,
}) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <Fragment>
      <AppNavbarComponent />
      <RenderMainContent open={openDrawer}>{children}</RenderMainContent>
    </Fragment>
  );
};

export default ApplayoutComponent;
