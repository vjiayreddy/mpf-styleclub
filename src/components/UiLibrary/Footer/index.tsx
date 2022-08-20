import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ContainerComponent from "../../uiElements/Container/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const StyledFooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  paddingTop: 75,
  paddingBottom: 100,
}));

const StyledFooterGridContainer = styled(Grid)({
  paddingLeft: 20,
  paddingRight: 20,
});

const StyledFooterLinksBox = styled(Grid)({
  paddingLeft: 20,
  paddingRight: 20,
  marginTop: 50,
});

const StyledFooterLinksTitle = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    color: theme.palette.common.white,
  })
);

const StyledFooterLinks = styled("ul")(() => ({
  listStyle: "none",
  padding: 0,
}));

const StyledFooterATag = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontSize: 14,
  color: theme.palette.grey[300],
  ":hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underLine",
  },
}));

const shop = [
  "Men’s Shopping",
  "Women’s Shopping",
  "Kids’ Shopping",
  "Discounts",
];

const company = [
  "Our Story",
  "Careers",
  "help@allbirds.com",
  "Privacy & Cookie policy",
];

const Footer = () => {
  return (
    <StyledFooterBox>
      <ContainerComponent>
        <StyledFooterGridContainer container>
          <Grid item xs={12}>
            <Typography
              sx={(theme) => ({
                color: theme.palette.common.white,
              })}
              align="center"
              variant="h5"
              component="h5"
            >
              Want style Ideas and Treats?
            </Typography>
          </Grid>
          <StyledFooterLinksBox container item xs={12}>
            <Grid item md={3} lg={3} xs={6} sm={4}>
              <StyledFooterLinksTitle variant="h4" component="span">
                STYLE CLUB
              </StyledFooterLinksTitle>
            </Grid>
            <Grid item md={3} lg={3} xs={6} sm={4}>
              <StyledFooterLinksTitle variant="overline" component="span">
                SHOP
              </StyledFooterLinksTitle>
              <StyledFooterLinks>
                {shop.map((item, index) => (
                  <li key={index}>
                    <Link href="/">
                      <StyledFooterATag>{item}</StyledFooterATag>
                    </Link>
                  </li>
                ))}
              </StyledFooterLinks>
            </Grid>
            <Grid item md={3} lg={3} xs={6} sm={4}>
              <StyledFooterLinksTitle variant="overline" component="span">
                COMPANY
              </StyledFooterLinksTitle>
              <StyledFooterLinks>
                {company.map((item, index) => (
                  <li key={index}>
                    <Link href="/">
                      <StyledFooterATag>{item}</StyledFooterATag>
                    </Link>
                  </li>
                ))}
              </StyledFooterLinks>
            </Grid>
            <Grid item md={3} lg={3} xs={6} sm={4}>
              <StyledFooterLinksTitle variant="overline" component="span">
                CONTACT
              </StyledFooterLinksTitle>
              <StyledFooterLinks>
                {company.map((item, index) => (
                  <li key={index}>
                    <Link href="/">
                      <StyledFooterATag>{item}</StyledFooterATag>
                    </Link>
                  </li>
                ))}
              </StyledFooterLinks>
            </Grid>
          </StyledFooterLinksBox>
        </StyledFooterGridContainer>
      </ContainerComponent>
    </StyledFooterBox>
  );
};

export default Footer;
