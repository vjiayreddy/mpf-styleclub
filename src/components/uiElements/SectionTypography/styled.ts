import { styled } from "@mui/material/styles";

const StyledSpanLabel = styled("mark")(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `100% 46%`,
  backgroundPosition: `0 65%`,
}));

export { StyledSpanLabel };
