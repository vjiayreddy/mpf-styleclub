import React from "react";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../../src/components/UiLibrary/Cards/ProductCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const StyledMainBox = styled(Box)(() => ({
  display: "flex",
  minHeight: `calc(100vh - 63px)`,
}));

const StyledGridContainer = styled(Grid)(() => ({}));

const StyledSideFilterBox = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  position: "-webkit-sticky",
  top: 100,
  bottom: 20,
}));
const StyledProductGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledSummaryLabel = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    fontWeight: 700,
  })
);
const ProductsPage = () => {
  return (
    <ContainerComponent>
      <StyledMainBox>
        <StyledGridContainer container>
          <StyledSideFilterBox item md={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <StyledSummaryLabel variant="subtitle2" component="p">
                  Fabric
                </StyledSummaryLabel>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <StyledSummaryLabel variant="subtitle2" component="p">
                  Fabric
                </StyledSummaryLabel>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <StyledSummaryLabel variant="subtitle2" component="p">
                  Patterns
                </StyledSummaryLabel>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <StyledSummaryLabel variant="subtitle2" component="p">
                  Fabric
                </StyledSummaryLabel>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </StyledSideFilterBox>
          <StyledProductGrid direction="column" container item md={9}>
            <Grid
              sx={{ flexGrow: 1, paddingBottom: "75px" }}
              item
              container
              spacing={2}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18].map((item, index) => (
                <Grid key={index} item md={3}>
                  <ProductCard />
                </Grid>
              ))}
            </Grid>
            <Grid item container alignItems="center" justifyContent="center">
              <Box p={3}>
                <Pagination
                  count={10}
                  color="secondary"
                  renderItem={(item) => (
                    <PaginationItem
                      components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </StyledProductGrid>
        </StyledGridContainer>
      </StyledMainBox>
    </ContainerComponent>
  );
};

export default ProductsPage;
