import { Fragment } from "react";
import { NextPage } from "next";
import HomeHerobannerContainer from "../src/containers/HomeHeroBanner/HomeHerobanner";
import HomeYoutSecretContainer from "../src/containers/HomeYourSecrate/HomeYoutSecret";

const HomePage: NextPage = (props: any) => {
  return (
    <Fragment>
      <HomeHerobannerContainer />
      <HomeYoutSecretContainer />
    </Fragment>
  );
};

export default HomePage;
