import React, { Fragment, useMemo } from "react";
import { productCategories } from "../../../utils/mockData";
import ImageIconTabs from "../../uiElements/ImageIconTabs/ImageIconTabs";
import ChipsComponent from "../../uiElements/Chips/Chips";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import { styled } from "@mui/material/styles";
import { NextRouter, useRouter } from "next/router";
import { GetServerSideProps } from "next";

const ProductsLayout = () => {
  const [value, setValue] = React.useState<undefined | number>(0);
  const router: NextRouter = useRouter();
  useMemo(() => setValue(Number(router.query.page)), [router.query?.page]);
  const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
  }));

  return (
    <Fragment>
      <ImageIconTabs data={productCategories} />
      <ChipsComponent />
      <Stack spacing={3}>
        <Pagination
          color="secondary"
          size="medium"
          onChange={(e, value) => {
            router.push(
              {
                pathname: router.pathname,
                query: {
                  page: value,
                },
              },
              undefined,
              { shallow: true }
            );
          }}
          page={value}
          variant="outlined"
          count={10}
          renderItem={(item) => (
            <StyledPaginationItem selected={value} {...item} />
          )}
        />
      </Stack>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default ProductsLayout;
