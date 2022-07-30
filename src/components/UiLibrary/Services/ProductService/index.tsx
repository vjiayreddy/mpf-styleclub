import React from 'react';
import ContainerComponent from '../../../uiElements/Container/Container';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ServiceCard from '../../Cards/ServiceCard';
import Image from "next/image";
import { Theme } from '@mui/material';


const StyledProductServiceBox = styled(Box)(({ theme }) => ({
    padding: "75px 130px"
}))

const StyledServiceCard = (theme: Theme) => ({
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    borderRight: `1px solid ${theme.palette.grey[300]}`
})

const ProductService = () => {
    return (
        <ContainerComponent>
            <StyledProductServiceBox>
                <Grid container spacing={3}>
                    <Grid md={4} lg={4} xl={4}>
                        <ServiceCard title='Free Shipping' subTitle='On all orders over $75.00' />
                    </Grid>
                    <Grid md={4} lg={4} xl={4}>
                        <ServiceCard boxSx={StyledServiceCard} title='Support' subTitle='24/7 Dedicated Support' />
                    </Grid>
                    <Grid md={4} lg={4} xl={4}>
                        <ServiceCard title='Free Returns' subTitle='On all orders over $75.00' component={<Image width={250} height={25} layout="fixed" src="/assets/images/payments.webp" />} />
                    </Grid>
                </Grid>
            </StyledProductServiceBox>
        </ContainerComponent>
    )
}


export default ProductService;