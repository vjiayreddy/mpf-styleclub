import React from 'react';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import SlickSlider from "react-slick";
import SliderProductCard from '../Cards/SliderProductCard';
import IconButton from '../IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:2,
    variableWidth: true,
    lazyLoad: true,
    infinite:true

}


const StyledContentSliderBox = styled(Box)(() => ({
    position: 'relative',
    top: "50%",
    width: "100%"
}))

const StyledSlickSlider = styled(Box)(() => ({
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
            <StyledSlickSlider>
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
            </StyledSlickSlider>

            <StyledArrowButtonsBox>
                <IconButton onClick={onClickNext} icon={<KeyboardArrowLeftIcon fontSize='small' />} />
                <IconButton onClick={onClickRight} icon={<KeyboardArrowRightIcon fontSize='small' />} />
            </StyledArrowButtonsBox>
        </StyledContentSliderBox>

    )
}

export default ContentSlider;
