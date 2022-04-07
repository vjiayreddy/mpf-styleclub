import { Theme } from "@mui/system";

export const OverrideMuiInputbase = (muiTheme: Theme): any => {
  return {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      input: {
        padding: 0,
      },
      sizeSmall: {
        height: 30,
        border: `1px solid ${muiTheme.palette.grey[400]}`,
        padding: 8,
        fontSize: 12,
      },
    },
  };
};
