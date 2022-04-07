import { createTheme, responsiveFontSizes } from "@mui/material";
import { OverrideMuiButton } from "./button";
import { OverrideMuiAppbar } from "./appbar";
import { OverrideMuiInputbase } from "./inputBase";
const muiTheme = createTheme();
const theme = createTheme({
  components: {
    MuiButton: OverrideMuiButton,
    MuiAppBar: OverrideMuiAppbar(muiTheme),
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          padding: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          marginTop: 0,
          marginBottom: 0,
          lineHeight: "14px",
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disableGutters: false,
      },
      styleOverrides: {
        padding: `5px 0px`,
        root: {
          lineHeight: "14px",
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${muiTheme.palette.grey[200]}`,
        },
      },
    },
    MuiInputBase: OverrideMuiInputbase(muiTheme),
  },
});
export default responsiveFontSizes(theme);
