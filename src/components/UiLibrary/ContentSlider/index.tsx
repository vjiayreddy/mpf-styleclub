import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import SlickSlider from "react-slick";
import SliderProductCard from "../Cards/ProductCard";
import IconButton from "../IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import _ from "lodash";

interface ContentSliderProps {
  data: any[];
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  lazyLoad: true,
};

const StyledContentSliderBox = styled(Box)(() => ({
  position: "relative",
  width: "100%",
}));

const StyledSlickSlider = styled(Box)(() => ({
  width: "90%",
  margin: "0 auto",
}));

const StyledArrowButtonsBox = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 15,
}));

const ContentSlider: React.FC<ContentSliderProps> = ({ data }) => {
  let sliderRef: any;
  const onClickNext = () => {
    sliderRef.slickNext();
  };
  const onClickPrev = () => {
    sliderRef.slickPrev();
  };
  return (
    <StyledContentSliderBox>
      <StyledSlickSlider>
        <SlickSlider
          beforeChange={(prev, next) => {
            console.log(prev, next);
          }}
          className="content-slider"
          ref={(c) => (sliderRef = c)}
          {...settings}
        >
          {data.map((product, index) => (
            <Box key={index} p={1} component="div">
              <SliderProductCard
                name={product.name}
                price={product.price}
                title={product.title}
                imgUrl={
                  !_.isEmpty(product?.images)
                    ? product?.images[0]
                    : "/assets/clients/11.jpg"
                }
              />
            </Box>
          ))}
        </SlickSlider>
      </StyledSlickSlider>

      <StyledArrowButtonsBox>
        <IconButton
          onClick={onClickPrev}
          icon={<KeyboardArrowLeftIcon fontSize="small" />}
        />
        <IconButton
          onClick={onClickNext}
          icon={<KeyboardArrowRightIcon fontSize="small" />}
        />
      </StyledArrowButtonsBox>
    </StyledContentSliderBox>
  );
};

export default ContentSlider;
