import { createMuiTheme } from "@material-ui/core/styles";

//8241CF - FUXIA
//461193 - FUXIA AZUL OSCURO
//520386 - MORADO
//9D78C6 - FUZIA CLARO
//FFFFFF - BLANCO

const light = "#8241CF";
const main = "#520386";
const dark = "#461193";
//const lightSecondary = "#9D78C6"; 



let theme = createMuiTheme({
  palette: {
    primary: {
      //light: light,
      main: light,
      //dark: dark,
    },
    secondary: {
      //light: lightSecondary,
      main: dark,
      //dark: dark,
    },
    warning: {
      //light: light,
      main: '#ef5350',
      //dark: dark,
    },
    success: {
      //light: light,
      main: main,
      //dark: dark,
    },
    info: {
      //light: light,
      main: main,
      //dark: dark,
    },
  },
  typography: {
    h1: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
    },
    h2: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
    },
    h3: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
    },
    h4: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
    },
    h5: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
      // fontWeight: 500,
      // fontSize: 26,
      // letterSpacing: 0.5,
    },
    h6: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
    },
    p: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
    },
    body1: {
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif, hyphens: auto",
    }
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  //...defaultTheme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        [theme.breakpoints.up("md")]: {
          marginLeft: theme.spacing(1),
        },
      },
      indicator: {
        height: 4,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        //background: 'green',
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("sm")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#babcc0",
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

export default theme;
