import { Fragment } from "react";
import { NextPage } from "next";
import HomeHerobannerContainer from "../src/containers/HomeHeroBanner/HomeHerobanner";
import HomeYourSecretContainer from "../src/containers/HomeYourSecrate/HomeYourSecret";
import HomePersonalStylistContainer from "../src/containers/HomePersonalStylist/HomePersonalStylist";
import HomeOurClientsSection from "../src/containers/HomeOurClients/HomeOurClients";
const HomePage: NextPage = (props: any) => {
  return (
    <Fragment>
      <HomeHerobannerContainer />
      <HomeYourSecretContainer />
      <HomePersonalStylistContainer />
      {/* <HomeOurClientsSection /> */}
    </Fragment>
  );
};

export default HomePage;
