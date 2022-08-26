import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface SideFilterAccordionProps {
  title: string;
  component: React.ReactNode;
}

const StyledSummaryLabel = styled(Typography)<{ component: any }>(() => ({
  fontWeight: 500,
}));

const SideFilterAccordion: React.FC<SideFilterAccordionProps> = ({
  title,
  component,
}) => {
  return (
    <Accordion defaultExpanded={false}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
      >
        <StyledSummaryLabel variant="subtitle2" component="p">
          {title}
        </StyledSummaryLabel>
      </AccordionSummary>
      <AccordionDetails>{component}</AccordionDetails>
    </Accordion>
  );
};

export default SideFilterAccordion;
