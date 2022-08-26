import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import IconButton from "../IconButton";
import CloseSvgIcon from "../Icon/components/CloseIcon";

interface ProductFiltersProps {
  openDrawer: boolean;
  onCloseDrawer?: () => void;
  children: React.ReactChild | React.ReactChildren;
}

const StyledProductFilterBox = styled(Box)(() => ({
  width: 400,
  position: "relative",
}));

const StyledProductFilterHeader = styled(Box)(({ theme }) => ({
  padding: 20,
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: theme.palette.common.white,
}));

const StyledProductContainer = styled(Box)(({ theme }) => ({
  paddingTop: 100,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 70,
}));

const ProductFilters: React.FC<ProductFiltersProps> = ({
  openDrawer,
  onCloseDrawer,
  children,
}) => {
  return (
    <Drawer anchor="right" onClose={onCloseDrawer} open={openDrawer}>
      <StyledProductFilterBox>
        <StyledProductFilterHeader>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" component="h6">
                Filters
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={onCloseDrawer} icon={<CloseSvgIcon />} />
            </Grid>
          </Grid>
        </StyledProductFilterHeader>
        <StyledProductContainer>{children}</StyledProductContainer>
      </StyledProductFilterBox>
    </Drawer>
  );
};

export default ProductFilters;
