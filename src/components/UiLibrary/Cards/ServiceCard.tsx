import React from 'react';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';



interface ServiceCardProps {
    title: string;
    subTitle: string;
    component?: React.ReactNode;
    boxSx?: SxProps
}


const StyledServiceCardBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection: 'column'
}))

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    subTitle,
    component,
    boxSx
}) => {
    return (
        <StyledServiceCardBox sx={boxSx}>
            <Typography gutterBottom align='center' variant="subtitle1" component="h6" >{title}</Typography>
            {component ? <>
                {component}
            </> : <Typography align='center' variant="body1" component="p" >
                {subTitle}
            </Typography>}

        </StyledServiceCardBox>
    )
}


export default ServiceCard;
