import { ComponentsOverrides, ComponentsProps } from "@mui/material";

type Props = {
  MuiTypography?: {
    defaultProps?: ComponentsProps["MuiTypography"];
    styleOverrides?: ComponentsOverrides["MuiTypography"];
    varaints?: ComponentsOverrides["MuiTypography"];
  }
}
export const MuiTypography: Props = {
  MuiTypography: {
    
  } 
}