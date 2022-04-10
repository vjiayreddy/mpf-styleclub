import { Fragment, useState } from "react";
import { NextPage } from "next";
import HomeHerobannerContainer from "../src/containers/HomeHeroBanner/HomeHerobanner";
import { Box } from "@mui/material";

const HomePage: NextPage = (props: any) => {
  const [disable, setDisable] = useState(false);
  return (
    <Fragment>
      <HomeHerobannerContainer />
      <Box p={10}>
        <button disabled={disable}>Active Button</button>
        <input onChange={(e)=>setDisable(e.target.checked)} type="checkbox" />
      </Box>
    </Fragment>
  );
};

export default HomePage;
