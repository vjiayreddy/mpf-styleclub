import React from 'react'
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';


type variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline";
type align = "left" | "right" | "inherit" | "center" | "justify";

type ExtraProps = {
  component: React.ElementType;
};

interface TitleWithSubtileProps {
  title: string;
  subTitle: string;
  titleSx?: SxProps;
  titleAlign?: align;
  subTitleAlign?: align,
  titleVariant?: variant;
  subTitleVariant?: variant;
  subTitleSx?: SxProps;
  titleComponent?: any;
  subTitleComponent?: any;
}


const StyledTitle = styled(Typography)<ExtraProps>(() => ({}))
const StyledSubTitle = styled(Typography)<ExtraProps>(() => ({}))
const TitleWithSubtile: React.FC<TitleWithSubtileProps> = ({ title, subTitle, titleSx, subTitleSx, titleVariant = "h4", titleComponent = "h3", subTitleComponent = "p", titleAlign = "center", subTitleAlign = "center", subTitleVariant = "subtitle2" }) => {
  return (
    <>
      <Box>
        <StyledTitle align={titleAlign} sx={titleSx} variant={titleVariant} component={titleComponent} >{title}</StyledTitle>
      </Box>
      <Box>
        <StyledSubTitle align={subTitleAlign} sx={subTitleSx} variant={subTitleVariant} component={subTitleComponent}>{subTitle}</StyledSubTitle>
      </Box>
    </>
  )
}

export default TitleWithSubtile