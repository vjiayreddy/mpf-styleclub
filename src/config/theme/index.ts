import { border } from "./../../../node_modules/@mui/system/index.d";
import { createTheme } from "@mui/material";
import { OverrideMuiButton } from "./button";
import { OverrideMuiAppBar } from "./appbar";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { GLOBAL_FONTS, APP_COLORS } from "./enums/enums";

import {
  customTypographyVarients,
  customTypographyProps,
  EXTENDED_COLORS,
  CUSTOM_STYLE_CLASSES,
} from "./interfaces/interfaces";
import { OverrideMuiInputBase } from "./inputBase";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends customTypographyProps {}
}

declare module "@mui/material/styles" {
  interface Palette extends EXTENDED_COLORS {}
  interface PaletteOptions extends EXTENDED_COLORS {}
  interface Theme extends CUSTOM_STYLE_CLASSES {}
  interface ThemeOptions extends CUSTOM_STYLE_CLASSES {}
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    primaryFont: TypographyStyleOptions | undefined;
    secondaryFont: TypographyStyleOptions | undefined;
  }

  interface TypographyOptions {
    primaryFont: TypographyStyleOptions | undefined;
    secondaryFont: TypographyStyleOptions | undefined;
  }
}

interface ExtendedTypographyOptions
  extends customTypographyVarients,
    TypographyOptions {}

const muiTheme = createTheme();
const theme = createTheme({
  typography: {
    fontFamily: [
      GLOBAL_FONTS.PRIMARY_FONT,
      GLOBAL_FONTS.SECONDARY_FONT,
      GLOBAL_FONTS.OPTIONAL_FONT,
    ].join(","),

    h1: {
      fontSize: 96,
      lineHeight: "110%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    h2: {
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 500,
    },
    h3: {
      fontSize: 36,
      lineHeight: 1,
      fontWeight: 500,
    },
    h4: {
      fontSize: 53,
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    h5: {
      fontSize: 42,
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    h6: {
      fontSize: 22,
      lineHeight: "120%",
      fontWeight: 900,
      letterSpacing: "-3%",
    },
    subtitle1: {
      fontSize: 28,
      lineHeight: "160%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    subtitle2: {
      fontSize: 18,
      lineHeight: "160%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    body1: {
      fontSize: 16,
      lineHeight: "160%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    body2: {
      fontSize: 14,
      lineHeight: "100%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    overline: {
      fontSize: 14,
      display: "block",
      fontWeight: 500,
      letterSpacing: 0.3,
      lineHeight: 1,
    },
    caption: {
      fontSize: 14,
      lineHeight: "100%",
      fontWeight: 400,
      letterSpacing: "-3%",
      color:muiTheme.palette.grey[500]
    },

    heading_extra_large: {
      fontSize: 60,
      fontWeight: 200,
      fontStyle: "normal",
    },
    heading_large: {
      fontSize: 50,
      fontWeight: 200,
      fontStyle: "normal",
    },
    heading_medium: {
      fontSize: 40,
      fontWeight: 500,
      fontStyle: "normal",
    },
    heading_small: {
      fontSize: 30,
      fontWeight: 500,
      fontStyle: "normal",
    },
    content_medium: {
      fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
      fontSize: 19,
      fontWeight: 300,
      lineHeight: "25px",
    },
    content_small: {
      fontSize: 16,
      fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
      fontWeight: 300,
      fontStyle: "normal",
    },
    primaryFont: {
      fontFamily: GLOBAL_FONTS.PRIMARY_FONT,
    },
    secondaryFont: {
      fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
    },
  } as ExtendedTypographyOptions,
  palette: {
    primary: {
      main: APP_COLORS.PRIMARY_COLOR,
    },
    secondary: {
      main: APP_COLORS.SECONDARY_COLOR,
    },
    THIRD_COLOR: APP_COLORS.THIRD_COLOR,
    BASE_BLACK: APP_COLORS.BASE_BLACK,
    BASE_BLUE: APP_COLORS.BASE_BLUE,
    BASE_GREEN: APP_COLORS.BASE_GREEN,
    BASE_RED: APP_COLORS.BASE_RED,
    BASE_BLACK_10: APP_COLORS.BASE_BLACK_10,
    BASE_BLACK_80: APP_COLORS.BASE_BLACK_80,
    BASE_ORANGE: APP_COLORS.BASE_ORANGE,
    BASE_YELLOW: APP_COLORS.BASE_YELLOW,
    BASE_BLACK_30: APP_COLORS.BASE_BLACK_30,
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
        color: "primary",
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
        sizeLarge: {
          fontSize: "16px !important",
          height: "55px !important",
          whiteSpace: "nowrap",
          lineHeight: "54px !important",
          minWidth: "190px !important",
          textTransform: "none",
        },
        containedSecondary: {
          lineHeight: "54px",
          fontSize: 16,
          backgroundColor: APP_COLORS.SECONDARY_COLOR,
        },
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
          color: muiTheme.palette.common.white,
          fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
          textTransform: "none",
        },
        textSizeSmall: {
          fontSize: 16,
          fontWeight: 600,
          padding: 0,
          minWidth: 0,
        },
        iconSizeSmall: {
          width: 16,
        },
      },
    },
    MuiAppBar: OverrideMuiAppBar(muiTheme),
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: GLOBAL_FONTS.PRIMARY_FONT,
          color: APP_COLORS.SECONDARY_COLOR,
          paddingLeft: 20,
          paddingRight: 20,
          minWidth: 50,
          fontSize: 16,
        },
        iconWrapper: {
          marginLeft: "0px !important",
        },
      },
    },
    MuiInputBase: OverrideMuiInputBase(muiTheme),
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
          fontWeight: 700,
          fontSize: 14,
          color: APP_COLORS.SECONDARY_COLOR,
          marginBottom: 10,
        },
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        variant: "standard",
        margin: "dense",
      },
      styleOverrides: {
        root: {
          fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
          color: muiTheme.palette.grey[500],
        },
      },
    },
    MuiChip: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        label: {
          fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        square: true,
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
          ":before": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${muiTheme.palette.grey[300]}`,
          padding: 0,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiPopper: {
      defaultProps: {
        sx: {
          zIndex: 1200,
        },
      },
    },
  },
  globalCardStyle: {
    width: "100%",
    borderRadius: 5,
    padding: 10,
    border: `1px solid ${muiTheme.palette.divider}`,
  },
});
export default theme;
