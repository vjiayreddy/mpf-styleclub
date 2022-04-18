import { GLOBAL_FONTS } from "./../enums/enums";
import { Theme } from "@mui/system";

export const OverrideMuiInputbase = (muiTheme: Theme): any => {
  return {
    defaultProps: {
      size: "medium",
      fullWidth: true,
    },
    styleOverrides: {
      root: {
        height: 45,
        border: `1px solid ${muiTheme.palette.grey[300]}`,
        borderRadius:5,
      },
      input: {
        padding: 10,
        fontFamily:GLOBAL_FONTS.SECONDARY_FONT,
        fontWeight:500,

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
