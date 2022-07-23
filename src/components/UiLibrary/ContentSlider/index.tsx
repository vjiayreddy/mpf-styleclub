import React from 'react';
import Box from "@mui/material/Box";
import SlickSlider from "react-slick";
import SliderProductCard from '../Cards/SliderProductCard';


const slides: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true
}

const ContentSlider = () => {
    return (
        <SlickSlider {...settings}>
            {slides.map((slide) => <Box p={2} key={slide} component="div">
                <SliderProductCard />
            </Box>)}
        </SlickSlider>
    )
}

export default ContentSlider;
