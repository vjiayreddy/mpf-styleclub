import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import LinkIconButton, { LinkIconButtonProps } from "../LinkIconButton";

type ExtraProps = {
    component?: React.ElementType;
};

interface CustomerFeatureProps extends LinkIconButtonProps {
    title: string;
    content: string;
    icon: string;
    showButton?: boolean,
}

const StyledCardBox = styled(Box)(({ theme }) => ({
    ...theme.globalCardStyle
}));

const StyledCardTitle = styled(Typography)<ExtraProps>(() => ({
    fontWeight: 600,
}));

const StyledCardContent = styled(Typography)<ExtraProps>(({ theme }) => ({
    fontSize: 16,
    lineHeight: "25px",
    color: theme.palette.grey[700],
}));

const CustomerFeature: React.FC<CustomerFeatureProps> = ({
    title,
    content,
    icon,
    btnId,
    onClick,
    btnSx,
    label,
    btnColor,
    showButton = true
}) => {
    return (
        <StyledCardBox>
            <Card component="div">
                <CardContent>
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12} sm container spacing={2}>
                            <Grid item xs>
                                <StyledCardTitle gutterBottom variant="body1" component="p">
                                    {title}
                                </StyledCardTitle>
                                <StyledCardContent variant="body2" component="p">
                                    {content}
                                </StyledCardContent>
                                {showButton && <LinkIconButton btnColor={btnColor} btnId={btnId} onClick={onClick} btnSx={btnSx} label={label} />
                                }
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Image
                                blurDataURL={icon}
                                placeholder="blur"
                                loading="lazy"
                                layout="fixed"
                                src={icon}
                                alt="mpf_styleclub_groom"
                                width={175}
                                height={175}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </StyledCardBox>
    );
};

export default CustomerFeature;
