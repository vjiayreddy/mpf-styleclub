export const OverrideMuiButton: any = {
  defaultProps: {
    size: "small",
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
  },
};
