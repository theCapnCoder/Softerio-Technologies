import { AppBar, Container, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export const TestNavBar = () => {
  return (
    <AppBar color="primary" position="static">
      <Container
        sx={{
          "@media (min-width:360px)": {
            backgroundColor: "green",
            padding: "18px 0 22px",
          },
          "@media (min-width:1973px)": {
            backgroundColor: "red",
            maxWidth: "1288px",
            padding: "19px 0 17px",
          },
        }}
      >
        <Typography> App Bar</Typography>
      </Container>
    </AppBar>
  );
};
