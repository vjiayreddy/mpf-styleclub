import React from 'react';
import { styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';import PhotoCamera from '@mui/icons-material/PhotoCamera';
//import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
    "&.MuiIconButton-root": {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: "100%",
        textAlign: 'center',
        minWidth: 0,
        display: 'flex',
        alignItems: 'center'
    }
}))


const IconButton = () => {
    return (
        <StyledIconButton edge="start" >
            <KeyboardArrowLeftIcon fontSize="small" />
        </StyledIconButton>
    )
}


export default IconButton;