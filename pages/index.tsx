import { Fragment } from "react";
import { NextPage } from "next";
import { Box } from "@mui/material";
import HomeHerobannerContainer from "../src/containers/HomeHeroBanner/HomeHerobanner";

const HomePage: NextPage = (props: any) => {
  return (
    <Fragment>
      <HomeHerobannerContainer />
    </Fragment>
  );
};

export default HomePage;
