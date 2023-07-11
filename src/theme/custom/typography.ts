import { ThemeOptions } from "@mui/material";

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    phoneText: true;
  }
}


export const typography: ThemeOptions = {
  typography: () => ({
    fontFamily: ["Averta", "Open Sans", "sans-serif"].join(","),
    h1: {
      color: "#FFF",
      textAlign: "center",
      fontSize: 39,
      fontWeight: 600,
      lineHeight: "103.1%"
    },
    textProps1: {
      color: "#FFF",
      textAlign: "center",
      fontSize: 39,
      fontWeight: 600,
      lineHeight: "103.1%"
    },



    textProps2: {
      color: "#000",
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "103.1%"
    },
    textProps3: {
      color: "#FFF",
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "103.1%"
    },
    textProps4: {
      color: "#000",
      textAlign: "center",
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "103.1%"
    },



    textProps5: {
      color: "#000",
      textAlign: "center",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "128.1%"
    },



    textProps6: {
      color: "#000",
      textAlign: "center",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "128.1%"
    },
    textProps7: {
      color: "#000",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "128.1%"
    },



    textProps8: {
      color: "#000",
      fontSize: 19,
      fontWeight: 600,
      lineHeight: "128.1%"
    },



    textProps9: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "132.6%"
    },



    textProps10: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "148.6%"
    },
    textProps11: {
      color: "rgba(0, 0, 0, 0.69)",
      textAlign: "center",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "128.1%"
    },
    textProps12: {
      color: "#000",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "128.1%"
    },


    
    textProps13: {
      color: "#FFF",
      fontSize: 15,
      fontWeight: 400,
      lineHeight: "150.6%"
    },
    textProps14: {
      color: "#000",
      fontSize: 15,
      fontWeight: 300,
      lineHeight: "132.6%"
    }
  }),
}