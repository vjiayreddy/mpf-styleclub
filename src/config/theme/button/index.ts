import { Theme } from "@mui/system";
import { GLOBAL_FONTS } from "./../enums/enums";
export const OverrideMuiButton = (theme: Theme): Object => {
  return {
    defaultProps: {
      size: "medium",
      color: "primary",
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      sizeSmall: {
        textTransform: "none",
        borderRadius: 0,
        height: 30,
      },
      sizeMedium: {
        height: 40,
        minWidth: 100,
        fontSize: 13,
        lineHeight: "9px",
        color: theme.palette.common.white,
        fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
        textTransform: "none",
      },
    },
  };
};
