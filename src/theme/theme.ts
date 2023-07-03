import { createTheme } from "@mui/material";
import { MuiCssBaseline } from "./components/MuiCssBaseline";
import { typography } from "./custom/typography";
import { breakpoints } from "./custom/breakpoints";

export const theme = createTheme({
  ...breakpoints,
  ...typography,
  components: {
    ...MuiCssBaseline
  }

})
