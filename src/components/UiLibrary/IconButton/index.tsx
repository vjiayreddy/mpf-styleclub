import React from 'react';
import { styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';

interface IconButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
    [x: string]: any

}

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


const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick,
    ...props
}) => {
    return (
        <StyledIconButton onClick={onClick} edge="start" {...props} >
            {icon}
        </StyledIconButton>
    )
}


export default IconButton;