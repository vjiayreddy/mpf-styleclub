import React from 'react';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import SlickSlider from "react-slick";
import SliderProductCard from '../Cards/SliderProductCard';
import IconButton from '../IconButton';

const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    lazyLoad: true,
    centerMode: true,

}


const StyledContentSliderBox = styled(Box)(() => ({
    position: 'relative',
    top: "50%",
    width: "100%"
}))

const StyledSilckSlider = styled(Box)(() => ({
    width: "90%",
    margin: '0 auto'
}))

const StyledArrowButtonsBox = styled(Box)(() => ({
    position: 'absolute',
    top: "50%",
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingLeft: 15

}))


const ContentSlider = () => {
    let sliderRef: any;
    const onClickNext = () => {
        sliderRef.slickNext();
    }
    const onClickRight = () => {
        sliderRef.slickPrev();
    }
    return (
        <StyledContentSliderBox>
            <StyledSilckSlider>
                <SlickSlider className="content-slider" ref={(c) => sliderRef = c}  {...settings}>
                    <Box p={1} component="div">
                        <SliderProductCard />
                    </Box>
                    <Box p={1} component="div">
                        <SliderProductCard />
                    </Box>
                    <Box p={1} component="div">
                        <SliderProductCard />
                    </Box>
                    <Box p={1} component="div">
                        <SliderProductCard />
                    </Box>
                    <Box p={1} component="div">
                        <SliderProductCard />
                    </Box>
                    <Box p={1} component="div">
                        <SliderProductCard />
                    </Box>
                    <Box p={1} component="div">
                        <SliderProductCard />
                    </Box>
                </SlickSlider>
            </StyledSilckSlider>

            <StyledArrowButtonsBox>
                <IconButton />
                <IconButton />
            </StyledArrowButtonsBox>
        </StyledContentSliderBox>

    )
}

export default ContentSlider;
