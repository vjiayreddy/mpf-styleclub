import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import IconButton from "../../components/UiLibrary/IconButton";
import CloseSvgIcon from "../../components/UiLibrary/Icon/components/CloseIcon";
import SideFilterAccordion from "../../components/UiLibrary/Accordions/SideFilterAccordion";
import CheckBoxGroup from "../../components/UiLibrary/FormElements/CheckBoxGrop";
import { useRouter } from "next/router";
import { ROUTES } from "../../routes/Routes";
import { useForm } from "react-hook-form";

interface ProductFiltersProps {
  openDrawer: boolean;
  data: any;
  onCloseDrawer?: () => void;
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

const StyledProductContainer = styled(Box)(() => ({
  paddingTop: 100,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 70,
}));

const ProductFilters: React.FC<ProductFiltersProps> = ({
  openDrawer,
  onCloseDrawer,
  data,
}) => {
  const router = useRouter();
  const { sideFilters } = data.initialData;
  const { control } = useForm();
  const handleRouter = (filterName: string, values: any) => {
    const { query } = router;
    const queryParams = { ...query };
    delete queryParams?.product;
    delete queryParams?.p;
    router.push({
      pathname: `${ROUTES.PRODUCTS}/${query.product}`,
      query: {
        p: 1,
        ...queryParams,
        [filterName]: values?.join(","),
      },
    });
  };

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
        <StyledProductContainer>
          {sideFilters && (
            <>
              <SideFilterAccordion
                title="Fabric"
                component={
                  <div>
                    <CheckBoxGroup
                      defaultValues={data?.selectedFabrics || []}
                      onGetSelectedValues={(values) => {
                        handleRouter("fabric", values);
                      }}
                      control={control}
                      name="fabric"
                      options={sideFilters.sideFilters.fabricFilters}
                    />
                  </div>
                }
              />
              <SideFilterAccordion
                title="Colors"
                component={
                  <div>
                    <CheckBoxGroup
                      defaultValues={data?.selectedColors || []}
                      onGetSelectedValues={(values) => {
                        handleRouter("colors", values);
                      }}
                      control={control}
                      name="colors"
                      options={sideFilters.sideFilters.colorFilters}
                    />
                  </div>
                }
              />

              <SideFilterAccordion
                title="Patterns"
                component={
                  <div>
                    <CheckBoxGroup
                      defaultValues={data?.selectedPatterns || []}
                      onGetSelectedValues={(values) => {
                        handleRouter("patterns", values);
                      }}
                      control={control}
                      name="patterns"
                      options={sideFilters.sideFilters.patternFilters}
                    />
                  </div>
                }
              />
              {sideFilters.typeFilters?.isTypeFilterEnabled && (
                <>
                  <SideFilterAccordion
                    title="Types"
                    component={
                      <div>
                        <CheckBoxGroup
                          defaultValues={data?.selectedPatterns || []}
                          onGetSelectedValues={(values) => {
                            handleRouter("types", values);
                          }}
                          control={control}
                          name="types"
                          options={sideFilters.typeFilters.typeFilters}
                        />
                      </div>
                    }
                  />
                </>
              )}
            </>
          )}
        </StyledProductContainer>
      </StyledProductFilterBox>
    </Drawer>
  );
};

export default ProductFilters;
