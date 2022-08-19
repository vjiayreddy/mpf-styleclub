import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { alpha, styled } from "@mui/material/styles";
import ContainerComponent from "../../../uiElements/Container/Container";
import Slider from "react-slick";
import Image from "next/image";
import { Typography } from "@mui/material";

interface HomeSliderBannerProps {
  image: string;
  title: string;
}

const StyledSlide = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  height: "100%",
}));

const StyledSlideBackdrop = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  position: "absolute",
  //backgroundColor: alpha(theme.palette.common.black, 0.2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBannerTitle = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    color: theme.palette.common.white,
  })
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BannerSlide: React.FC<HomeSliderBannerProps> = ({ image, title }) => {
  return (
    <StyledSlide>
      <Image
        style={{ filter: "brightness(80%)" }}
        alt="home-slider-1"
        loading="lazy"
        placeholder="blur"
        blurDataURL={image}
        src={image}
        width={700}
        height={750}
      />
      <StyledSlideBackdrop>
        <StyledBannerTitle variant="h2" component="h2">
          {title}
        </StyledBannerTitle>
      </StyledSlideBackdrop>
    </StyledSlide>
  );
};

const HomeSliderBanner = () => {
  return (
    <ContainerComponent>
      <Slider {...settings}>
        <BannerSlide title="Mens" image="/assets/images/home_banner_2.webp" />
        <BannerSlide
          title="Suit's"
          image="/assets/images/home_banner_slide.webp"
        />
        <BannerSlide
          title="Women's"
          image="/assets/images/home_banner_slide.webp"
        />
      </Slider>
    </ContainerComponent>
  );
};

export default HomeSliderBanner;
