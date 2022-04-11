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
    THRID_COLOR: APP_COLORS.THRID_COLOR,
  },
  components: {
    MuiButton: OverrideMuiButton(muiTheme),
    MuiAppBar: OverrideMuiAppbar(muiTheme),
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
          fontSize: 16,
          color: APP_COLORS.SECONDARY_COLOR,
        },
      },
    },
    // MuiList: {
    //   defaultProps: {
    //     disablePadding: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       fontSize: 14,
    //       padding: 0,
    //     },
    //   },
    // },
    // MuiListItemText: {
    //   styleOverrides: {
    //     primary: {
    //       fontSize: 14,
    //       marginTop: 0,
    //       marginBottom: 0,
    //       lineHeight: "14px",
    //     },
    //   },
    // },
    // MuiListItem: {
    //   defaultProps: {
    //     disableGutters: false,
    //   },
    //   styleOverrides: {
    //     padding: `5px 0px`,
    //     root: {
    //       lineHeight: "14px",
    //     },
    //   },
    // },
    // MuiMenu: {
    //   defaultProps: {
    //     elevation: 0,
    //   },
    // },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       border: `1px solid ${muiTheme.palette.grey[200]}`,
    //     },
    //   },
    // },
    // MuiInputBase: OverrideMuiInputbase(muiTheme),
  },
});
export default responsiveFontSizes(theme);
