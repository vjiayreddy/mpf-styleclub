import { styled } from "@mui/material/styles";

const StyledSpanLabel = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `100% 46%`,
  backgroundPosition: `0 65%`,
}));

const StyledContentSpanLabel = styled("span")(({ theme }) => ({
  fontWeight: 600,
}));

export { StyledSpanLabel, StyledContentSpanLabel };
