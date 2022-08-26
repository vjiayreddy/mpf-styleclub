import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ContainerComponent from "../../uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { NextRouter, useRouter } from "next/router";
import { FILTERS } from "../../../utils/enums";
import { ROUTES } from "../../../routes/Routes";

interface ChipFiltersProps {
  filters: any;
}

const StyledMainBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  paddingTop: 20,
  paddingBottom: 20,
}));

const ChipFilters: React.FC<ChipFiltersProps> = ({ filters }) => {
  const router: NextRouter = useRouter();

  const handleDelete = (
    filterName: string,
    dataSource: string[],
    value: string
  ) => {
    const { query } = router;
    const queryParams = { ...query };
    delete queryParams?.product;
    delete queryParams?.p;
    const _dataSource: string[] = dataSource;
    const modifiedDataSource: string[] = _dataSource.filter(function (item) {
      return item !== value;
    });
    router.push({
      pathname: `${ROUTES.PRODUCTS}/${query.product}`,
      query: {
        ...queryParams,
        [filterName]: modifiedDataSource?.join(","),
      },
    });
  };

  return (
    <StyledMainBox>
      <ContainerComponent>
        <Box pl={3} pr={3}>
          <Grid container spacing={2}>
            {filters?.selectedFabrics.length > 0 && (
              <>
                {filters?.selectedFabrics.map((fabric, index) => (
                  <Grid item key={index}>
                    <Chip
                      onDelete={() => {
                        handleDelete(
                          FILTERS.FABRIC,
                          filters.selectedFabrics,
                          fabric
                        );
                      }}
                      label={fabric}
                    />
                  </Grid>
                ))}
              </>
            )}
            {filters?.selectedColors.length > 0 && (
              <>
                {filters?.selectedColors.map((color, index) => (
                  <Grid item key={index}>
                    <Chip
                      onDelete={() => {
                        handleDelete(
                          FILTERS.COLORS,
                          filters.selectedColors,
                          color
                        );
                      }}
                      label={color}
                    />
                  </Grid>
                ))}
              </>
            )}
            {filters?.selectedPatterns.length > 0 && (
              <>
                {filters?.selectedPatterns.map((pattern, index) => (
                  <Grid item key={index}>
                    <Chip
                      onDelete={() => {
                        handleDelete(
                          FILTERS.PATTERNS,
                          filters.selectedPatterns,
                          pattern
                        );
                      }}
                      label={pattern}
                    />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Box>
      </ContainerComponent>
    </StyledMainBox>
  );
};

export default ChipFilters;
