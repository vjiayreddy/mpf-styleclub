import { Theme } from "@mui/system";

export const OverrideMuiAppbar = (muiTheme: Theme): any => {
  return {
    defaultProps: {
      position: "fixed",
      elevation: 0,
    },
    styleOverrides: {
      positionFixed: {
        backgroundColor: muiTheme.palette.common.white,
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
        height: 65,
      },
    },
  };
};
