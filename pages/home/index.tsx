import React from "react";
import HeroBanner from "../../src/components/UiLibrary/Banners/HeroBanner";
import OfferCard from "../../src/components/UiLibrary/Cards/OfferCard";
import ProductService from "../../src/components/UiLibrary/Services/ProductService";



const Home = () => {
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
        </>
    );
};

export default Home;
