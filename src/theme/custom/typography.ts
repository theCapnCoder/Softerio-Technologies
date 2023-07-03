import { ThemeOptions } from "@mui/material";

export const typography: ThemeOptions = {
  typography: {
    fontFamily: ["Averta", "Open Sans", "sans-serif"].join(","),
    h1: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: '4.875rem',
      fontWeight: 600,
      lineHeight: "103.1%",
      '@media (min-width:1793px)': {
        fontSize: "6.875rem",
      },
    }
  }
}