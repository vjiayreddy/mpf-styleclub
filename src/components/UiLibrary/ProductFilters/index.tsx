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
}

const StyledProductFilterBox = styled(Box)(() => ({
  width: 400,
  position: "relative",
}));

const StyledProductFilterHeader = styled(Box)(({ theme }) => ({
  padding: 25,
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: theme.palette.common.white,
}));

const ProductFilters: React.FC<ProductFiltersProps> = ({
  openDrawer,
  onCloseDrawer,
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
                <IconButton onClick={()=>{}} icon={<CloseSvgIcon/>}/>
            </Grid>
          </Grid>
        </StyledProductFilterHeader>
      </StyledProductFilterBox>
    </Drawer>
  );
};

export default ProductFilters;
