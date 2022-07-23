import React from 'react';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { styled } from '@mui/material/styles';


const StyledImageBox = styled(Box)(() => ({
    height: '300px',
    width: "300px"

}))

const StyledContainerBox = styled(Box)(() => ({
    paddingTop: 20,
    paddingBottom: 20
}))

const StyledProductTitle = styled(Typography)<{ component: React.ReactNode }>(() => ({
    fontSize: 18,
    fontWeight: 600
}))

const StyledProductPrice = styled(Typography)<{ component: React.ReactNode }>(({ theme }) => ({
    fontSize: 16,
    fontWeight: 600,
    color: theme.palette.grey[500]
}))


const SliderProductCard = () => {
    return (
        <Grid alignItems="flex-start" container direction='column'>
            <Grid item xs={12}>
                <StyledImageBox>
                    <Image loading='lazy' placeholder="blur" blurDataURL="/assets/images/girl.jpg" width={300} height={300} alt='product-image' src="/assets/images/girl.jpg" layout="intrinsic" />
                </StyledImageBox>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ width: "100%" }}>
                    <StyledContainerBox>
                        <StyledProductTitle display="block" variant="subtitle2" component="p" align='left'>
                            Classic Dress
                        </StyledProductTitle>
                        <StyledProductPrice display="block" variant="body2" component="p" align='left'>
                           $252.00
                        </StyledProductPrice>
                    </StyledContainerBox>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SliderProductCard;
