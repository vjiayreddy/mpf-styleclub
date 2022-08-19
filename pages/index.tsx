import React from "react";
import { NextPage } from "next";
import HeroBanner from "../src/components/UiLibrary/Banners/HeroBanner";
import LeftImageContentCard from "../src/components/UiLibrary/Cards/LeftImageContentCard";
import OfferCard from "../src/components/UiLibrary/Cards/OfferCard";
import RightImageContentCard from "../src/components/UiLibrary/Cards/RigghtImageContent";
import ProductService from "../src/components/UiLibrary/Services/ProductService";
import EventCard from "../src/components/UiLibrary/Cards/EventCard";
import HomeSliderBanner from "../src/components/UiLibrary/Banners/HomeSliderBanner";

const Home: NextPage = () => {
  return (
    <>
      <HomeSliderBanner />
      {/* <HeroBanner
        onClickButton={() => {
          return;
        }}
        bannerImgUrl="/assets/images/hero.webp"
        bannerSpan="Featured"
        bannerPrimaryTitle="Blazer Collections,"
        bannerSecondaryTitle="Shop"
        bannerBtnLbl="SHOP NOW"
      /> */}
      {/* <ProductService />
      <OfferCard />
      <LeftImageContentCard />
      <RightImageContentCard />
      <LeftImageContentCard />
      <RightImageContentCard />
      <EventCard /> */}
    </>
  );
};

export default Home;
