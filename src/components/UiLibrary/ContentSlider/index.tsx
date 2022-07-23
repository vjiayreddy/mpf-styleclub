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
    variableWidth: true,
    lazyLoad: true,
}

const ContentSlider = () => {
    return (
        <SlickSlider style={{ minHeight: 300 }} {...settings}>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
            <Box p={2} component="div">
                <SliderProductCard />
            </Box>
        </SlickSlider>
    )
}

export default ContentSlider;
