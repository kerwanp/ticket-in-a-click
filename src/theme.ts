import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";

function generateShadows(): Shadows {
  const shadows = ["none"];
  for (let i = 1; i < 24; i++) {
    shadows.push(`rgba(0, 0, 0, 0.1) 0px ${i * 2}px ${i * 8}px;`);
  }
  return shadows as Shadows;
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#3C50E0",
      dark: "#00005C",
      light: "#EEF5FF",
    },
    success: {
      main: "#28e0b4",
    },
  },
  spacing: 16,
  typography: {
    fontFamily: "Poppins",
    fontSize: 14,
  },
  shadows: generateShadows(),
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "unset",
          padding: "1.2em 4em",
          fontWeight: "500",
          fontSize: "1em",
        },
        sizeSmall: {
          padding: "0.6em 4em",
        },
      },
    },
  },
});

theme = createTheme(theme, {
  breakpoints: {
    values: {
      ...theme.breakpoints.values,
      lg: 1200,
    },
  },
  typography: {
    body1: {
      fontSize: "0.8em",
      color: "#717E9D",
    },
    h1: {
      fontWeight: "700",
      fontSize: "4em",
      color: theme.palette.primary.dark,
    },
    h2: {
      fontWeight: "600",
      color: theme.palette.primary.dark,
      marginBottom: "0.5em",
    },
    h3: {
      textTransform: "uppercase",
      fontSize: "1em",
      fontWeight: "600",
      color: theme.palette.primary.main,
      letterSpacing: "0.3em",
      marginBottom: "1em",
    },
    h4: {
      fontWeight: "500",
      color: theme.palette.primary.dark,
    },
    h5: {
      fontWeight: "500",
      color: theme.palette.primary.dark,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1200px",
        },
        fixed: {
          maxWidth: "1400px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: theme.shadows[4],
        },
      },
    },
  },
});

export default theme;
