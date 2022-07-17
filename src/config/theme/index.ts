import { createTheme, responsiveFontSizes } from "@mui/material";
import { OverrideMuiButton } from "./button";
import { OverrideMuiAppbar } from "./appbar";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { GLOBAL_FONTS, APP_COLORS } from "./enums/enums";

import {
  customTypographyVarients,
  customTypographyProps,
  EXTENDED_COLORS,
} from "./interfaces/interfaces";
import { OverrideMuiInputbase } from "./inputBase";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends customTypographyProps {}
}

declare module "@mui/material/styles" {
  interface Palette extends EXTENDED_COLORS {}
  interface PaletteOptions extends EXTENDED_COLORS {}
  interface Theme {
    a?: {
      fontFamily?: string;
      fontSize?: string | number;
    };
  }
  interface ThemeOptions {
    a?: {
      fontFamily?: string;
      fontSize?: string | number;
    };
  }
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
      fontSize: 85,
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    h3: {
      fontSize: 64,
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    h4: {
      fontSize: 53,
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    h5: {
      fontSize: 32,
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    h6: {
      fontSize: 26,
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-3%",
    },
    subtitle1: {
      fontSize: 32,
      lineHeight: "160%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    subtitle2: {
      fontSize: 26,
      lineHeight: "160%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    body1: {
      fontSize: 21,
      lineHeight: "160%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    body2: {
      fontSize: 18,
      lineHeight: "100%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    overline: {
      fontSize: 18,
      lineHeight: "100%",
      fontWeight: 400,
      letterSpacing: "-3%",
    },
    caption: {
      fontSize: 12,
      lineHeight: "100%",
      fontWeight: 400,
      letterSpacing: "-3%",
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
  },
  components: {
    MuiButton: OverrideMuiButton(muiTheme),
    MuiAppBar: OverrideMuiAppbar(muiTheme),
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
          color: APP_COLORS.SECONDARY_COLOR,
          paddingLeft: `0px`,
          paddingRight: 20,
          minWidth: 50,
        },
      },
    },
    MuiInputBase: OverrideMuiInputbase(muiTheme),
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
  },
});
export default theme;
