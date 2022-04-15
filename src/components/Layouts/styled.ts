import { styled } from "@mui/material/styles";
interface RenderMainContentProps {
  open?: boolean;
  // drawerWidth?: number;
}

export const RenderMainContent = styled("main")<RenderMainContentProps>(
  ({ theme, open }) => ({
    flexGrow: 1,
    paddingTop: 60,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `185px`,
    }),
  })
);
