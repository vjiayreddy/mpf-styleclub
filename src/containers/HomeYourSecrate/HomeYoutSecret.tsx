import React from "react";
import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
import {
  StyledSectionContainer,
  SxSectionTitleStyles,
  SxSectionContentStyles,
} from "./styled";

const HomeYoutSecretContainer = () => {
  return (
    <StyledSectionContainer>
      <SectionTypographyComponent
        titleVarient="heading_large"
        primaryTitle="Your secret to looking good "
        titleComponent="h2"
        highlightTitle="all day, every day"
        titleSx={SxSectionTitleStyles}
        contentSx={SxSectionContentStyles}
        contentElementType="p"
        contentComponent={
          <>
            Can you describe your own style? It’s not that easy right? All the
            men who are most interested in looking good but don’t know where to
            start. That’s where <b> MPF Style Club </b> comes in. Our Personal
            Stylists and AI powered tools are your secret weapon to looking your
            best all day, everyday. If you’re in this club, you will get to know
            your persona which will be desirable for you and everyone around
            you.
          </>
        }
      />
    </StyledSectionContainer>
  );
};

export default HomeYoutSecretContainer;
