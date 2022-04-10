import React from "react";
import Typography from "@mui/material/Typography";
import { StyledSpanLabel } from "./styled";
import { SxProps } from "@mui/system";

type variant =
  | "heading_extra_large"
  | "heading_large"
  | "heading_medium"
  | "heading_extra_small"
  | "heading_extra_small";

interface SectionTypographyComponentProps {
  primaryTitle: string;
  highlightTitle?: string;
  secondaryTitle?: string;
  titleVarient?: variant;
  titleComponent?: React.ElementType<any>;
  titleSx?: SxProps;
}

const SectionTypographyComponent: React.FC<SectionTypographyComponentProps> = ({
  primaryTitle,
  highlightTitle,
  secondaryTitle,
  titleVarient,
  titleComponent,
  titleSx,
}) => {
  return (
    <>
      <Typography
        variant={titleVarient ? titleVarient : "heading_large"}
        component={titleComponent}
        sx={titleSx}
      >
        {primaryTitle}
        <StyledSpanLabel>{highlightTitle}</StyledSpanLabel>
        {secondaryTitle}
      </Typography>
    </>
  );
};

export default SectionTypographyComponent;
