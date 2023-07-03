import { ComponentsProps, ComponentsOverrides } from "@mui/material";
import AvertaWOFF from '../../fonts/Averta.woff';
import AvertaSemiboldWOFF from '../../fonts/Averta-Semibold.woff';

type Props = {
  MuiCssBaseline?: {
    defaultProps?: ComponentsProps["MuiCssBaseline"];
    styleOverrides?: ComponentsOverrides["MuiCssBaseline"];
    varaints?: ComponentsOverrides["MuiCssBaseline"];
  }
}
export const MuiCssBaseline: Props = {
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'Averta';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Averta'), local('Averta-Regular'), url(${AvertaWOFF}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
        font-family: 'Averta';
        font-style: normal;
        font-display: swap;
        font-weight: 600;
        src: local('Averta-Semibold'), local('Averta-Semibold'), url(${AvertaSemiboldWOFF}) format('woff');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      `,
  },
}

