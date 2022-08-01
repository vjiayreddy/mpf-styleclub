import React from "react";
import { NextPage } from "next";
import HeroBanner from "../../src/components/UiLibrary/Banners/HeroBanner";
import LeftImageContentCard from "../../src/components/UiLibrary/Cards/LeftImageContentCard";
import OfferCard from "../../src/components/UiLibrary/Cards/OfferCard";
import RightImageContentCard from "../../src/components/UiLibrary/Cards/RigghtImageContent";
import ProductService from "../../src/components/UiLibrary/Services/ProductService";





const Home: NextPage = () => {
    return (
        <>
            <HeroBanner
                onClickButton={() => {
                    return;
                }}
                bannerImgUrl="/assets/images/hero.webp"
                bannerSpan="Featured"
                bannerPrimaryTitle="Blazer Collections,"
                bannerSecondaryTitle="Shop"
                bannerBtnLbl="SHOP NOW"
            />
            <ProductService />
            <OfferCard />
            <LeftImageContentCard />
            <RightImageContentCard />
            <LeftImageContentCard />
            <RightImageContentCard />
        </>
    );
};





export default Home;
