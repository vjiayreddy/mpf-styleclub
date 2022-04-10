import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledSpanLabel, StyledContentSpanLabel } from "./styled";
import { SxProps } from "@mui/system";

type titleVariant =
  | "heading_extra_large"
  | "heading_large"
  | "heading_medium"
  | "heading_extra_small"
  | "heading_small";

type contentVariant =
  | "content_medium"
  | "content_small"
  | "content_extra_small";

interface SectionTypographyComponentProps {
  primaryTitle: string;
  highlightTitle?: string;
  secondaryTitle?: string;
  titleVarient?: titleVariant;
  contentVarient?: contentVariant;
  titleComponent?: React.ElementType<any>;
  contentElementType?: React.ElementType<any>;
  contentComponent?: React.ReactNode;
  titleSx?: SxProps;
  contentSx?: SxProps;
  primaryContentText?: string;
  secondaryContentText?: string;
  BoldContextTextBold?: string;
}

const SectionTypographyComponent: React.FC<SectionTypographyComponentProps> = ({
  primaryTitle,
  highlightTitle,
  secondaryTitle,
  titleVarient,
  contentVarient,
  titleComponent,
  primaryContentText,
  secondaryContentText,
  BoldContextTextBold,
  titleSx,
  contentSx,
  contentElementType,
  contentComponent,
}) => {
  return (
    <>
      <Box>
        <Typography
          variant={titleVarient ? titleVarient : "heading_extra_large"}
          component={titleComponent}
          sx={titleSx}
        >
          {primaryTitle}
          <StyledSpanLabel>{highlightTitle}</StyledSpanLabel>
          {secondaryTitle}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={contentSx}
          variant={contentVarient ? contentVarient : "content_medium"}
          component={contentElementType}
        >
          {contentComponent ? (
            contentComponent
          ) : (
            <>
              {primaryContentText}
              <StyledContentSpanLabel>
                {BoldContextTextBold}
              </StyledContentSpanLabel>
              {secondaryContentText}
            </>
          )}
        </Typography>
      </Box>
    </>
  );
};

export default SectionTypographyComponent;
