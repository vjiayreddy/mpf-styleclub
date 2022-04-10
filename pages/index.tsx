import { Fragment } from "react";
import { NextPage } from "next";
import HomeHerobannerContainer from "../src/containers/HomeHeroBanner/HomeHerobanner";
import HomeYoutSecretContainer from "../src/containers/HomeYourSecrate/HomeYoutSecret";
import HomePersonalStylistContainer from "../src/containers/HomePersonalStylist/HomePersonalStylist";

const HomePage: NextPage = (props: any) => {
  return (
    <Fragment>
      <HomeHerobannerContainer />
      <HomeYoutSecretContainer />
      <HomePersonalStylistContainer />
    </Fragment>
  );
};

export default HomePage;
