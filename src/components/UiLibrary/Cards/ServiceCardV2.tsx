import React from "react";
import Grid from "@mui/material/Grid";
import Shipping from "../Icon/components/Shipping";
import { Typography } from "@mui/material";

interface ServiceCardV2Props {
  component: React.ReactNode;
  title: string;
  subtitle: string;
}

const ServiceCardV2: React.FC<ServiceCardV2Props> = ({component,title,subtitle}) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
       {component}
      </Grid>
      <Grid direction="column" container xs item>
        <Grid item xs={12}>
          <Typography variant="overline" component="span">
           {title}
          </Typography>
          <Typography variant="caption" component="span">
           {subtitle}
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceCardV2;
