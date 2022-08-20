import React from "react";
import { NextPage } from "next";
import HomeSliderBanner from "../src/components/UiLibrary/Banners/HomeSliderBanner";
import ProductServiceV2 from "../src/components/UiLibrary/Services/ProductServiceV2";
import NewCollections from "../src/containers/Home/NewCollections";
import DiscoverStylist from "../src/containers/Home/DiscoverStylist";

const Home: NextPage = () => {
  return (
    <>
      <HomeSliderBanner />
      <ProductServiceV2 />
      <NewCollections />
      <DiscoverStylist />
    </>
  );
};

export default Home;
