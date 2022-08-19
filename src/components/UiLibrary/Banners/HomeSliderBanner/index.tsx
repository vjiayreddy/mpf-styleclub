import React from "react";
import Box from "@mui/material/Box";
import ContainerComponent from "../../../uiElements/Container/Container";
import Slider from "react-slick";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface HomeSliderBannerProps {
  image: string;
  title: string;
  btnName: string;
}

const StyledSlide = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  height: "100%",
}));

const StyledSlideBackdrop = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const StyledBannerTitle = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    color: theme.palette.common.white,
    marginBottom: 30,
  })
);

const StyledBannerButton = styled(Button)(({ theme }) => ({
  background: theme.palette.common.white,
  color: theme.palette.secondary.main,
  "&:hover": {
    background: theme.palette.common.white,
  },
}));

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

const BannerSlide: React.FC<HomeSliderBannerProps> = ({
  image,
  title,
  btnName,
}) => {
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
        <Box>
          <StyledBannerButton
            endIcon={<ArrowForwardIcon sx={{ width: "16px" }} />}
            color="secondary"
          >
            {btnName}
          </StyledBannerButton>
        </Box>
      </StyledSlideBackdrop>
    </StyledSlide>
  );
};

const HomeSliderBanner = () => {
  return (
    <ContainerComponent>
      <Slider {...settings}>
        <BannerSlide
          btnName="Shop Suits"
          title="Suits"
          image="/assets/images/home_banner_2.webp"
        />
        <BannerSlide
          btnName="Shop Sherwani"
          title="Sherwani"
          image="/assets/images/home_banner_slide.webp"
        />
        <BannerSlide
          btnName="Shop Formals"
          title="Formals"
          image="/assets/images/home_banner_3.webp"
        />
      </Slider>
    </ContainerComponent>
  );
};

export default HomeSliderBanner;
