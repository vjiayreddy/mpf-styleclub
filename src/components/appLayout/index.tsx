import React, { Fragment, useState } from "react";
import AppNavbarComponent from "../uiElements/appNavBar";
import { RenderMainContent } from "./styled";
interface appLayoutProps {
  children: React.ReactNode;
}

const sliderWidth = 185;
const ApplayoutComponent: React.FunctionComponent<appLayoutProps> = ({
  children,
}) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  return (
    <Fragment>
      <AppNavbarComponent
        onOpenDrawer={() => setOpenDrawer(!openDrawer)}
        openDrawer={openDrawer}
        drawerWidth={sliderWidth}
      />
      <RenderMainContent open={openDrawer}>
        {children}
      </RenderMainContent>
    </Fragment>
  );
};

export default ApplayoutComponent;
