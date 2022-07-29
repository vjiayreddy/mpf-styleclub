import React from "react";
import HeroBanner from "../../src/components/UiLibrary/Banners/HeroBanner";

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
        </>
    );
};

export default Home;
