import React, { useEffect, useState,memo } from "react";
import SlickSlider from "react-slick";
import Box from "@mui/material/Box";
import Image from "next/image";

interface ProductViewProps {
  sliderImages: string[];
  imageAlt?: string;
}

const settingsMain = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
};

const settingsThumbs = {
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  swipeToSlide: true,
  focusOnSelect: true,
  centerPadding: "10px",
  variableWidth: true,
};

const ProductView: React.FC<ProductViewProps> = ({
  sliderImages,
  imageAlt,
}) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [productViewSlider, setProductViewSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

  useEffect(() => {
    setNav1(productViewSlider);
    setNav2(thumbnailSlider);
  });

  return (
    <>
      <SlickSlider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setProductViewSlider(slider)}
      >
        {sliderImages.map((slide, index) => (
          <div key={index}>
            <Image
              alt={imageAlt + index}
              src={slide}
              width={600}
              height={850}
              placeholder="blur"
              loading="lazy"
              blurDataURL={slide}
            />
          </div>
        ))}
      </SlickSlider>
      <div className="product-thumbnail-slider-wrap">
        <SlickSlider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setThumbnailSlider(slider)}
        >
          {sliderImages.map((slide, index) => (
            <Box pr={1} key={index}>
              <Image
                alt={imageAlt + index}
                src={slide}
                width={85}
                height={100}
                placeholder="blur"
                loading="lazy"
                blurDataURL={slide}
              />
            </Box>
          ))}
        </SlickSlider>
      </div>
    </>
  );
};

export default memo(ProductView);
